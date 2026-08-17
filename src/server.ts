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
  <title>Acesso Indisponível</title>
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
      max-width: 440px;
      width: 100%;
      background: #111111;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 28px;
      padding: 44px 32px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
    }
    .flag {
      font-size: 56px;
      margin-bottom: 20px;
      line-height: 1;
    }
    .badge {
      display: inline-block;
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #fca5a5;
      font-size: 11px;
      font-weight: 800;
      padding: 6px 16px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 22px;
      font-weight: 900;
      line-height: 1.3;
      margin-bottom: 12px;
      color: #ffffff;
    }
    p {
      font-size: 14px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.65);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="flag">🇧🇷</div>
    <span class="badge">Acesso Restrito</span>
    <h1>Conteúdo Exclusivo para o Brasil</h1>
    <p>Desculpe, nossa plataforma está configurada para acesso exclusivo a conexões localizadas no Brasil.</p>
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
        status: 403,
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
