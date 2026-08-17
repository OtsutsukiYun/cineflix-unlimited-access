import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function isRequestFromOutsideBrazil(request: Request): boolean {
  // Cloudflare passes 'cf-ipcountry' header with 2-letter ISO country code (e.g., 'BR', 'US', 'PT')
  const country = request.headers.get("cf-ipcountry")?.toUpperCase();

  // If cf-ipcountry is present and is NOT 'BR' (and not 'XX' for local dev), block request
  if (country && country !== "BR" && country !== "XX") {
    return true;
  }

  // Also check secondary geolocation headers if present
  const altCountry = (
    request.headers.get("x-country-code") || request.headers.get("sec-ch-ip-country")
  )?.toUpperCase();
  if (altCountry && altCountry !== "BR" && altCountry !== "XX") {
    return true;
  }

  return false;
}

function renderGeoblockPage(): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 Not Found</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #080808;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      text-align: center;
    }
    .card {
      max-width: 420px;
      width: 100%;
      background: #111111;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 40px 28px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    }
    .code {
      font-size: 72px;
      font-weight: 900;
      color: #ef4444;
      line-height: 1;
      margin-bottom: 12px;
      letter-spacing: -2px;
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 8px;
      color: #ffffff;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.5);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="code">404</div>
    <h1>Página Não Encontrada</h1>
    <p>O endereço solicitado não está disponível ou foi removido do servidor.</p>
  </div>
</body>
</html>`;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    if (isRequestFromOutsideBrazil(request)) {
      return new Response(renderGeoblockPage(), {
        status: 404,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
