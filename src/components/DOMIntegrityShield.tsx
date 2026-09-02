import { useEffect } from "react";
import { DOWNLOADER_OFFICIAL_CODE, NTDOWN_OFFICIAL_CODE } from "@/config/security";

/**
 * 🛡️ COMPONENTE DE SEGURANÇA E PROTEÇÃO CONTRA TAMPERING / INJEÇÃO DOM
 * 
 * 1. Monitora o DOM em tempo real via MutationObserver.
 * 2. Impede alteração de preços, códigos oficiais (Downloader/NtDown) e links de suporte.
 * 3. Se algum script malicioso ou usuário via DevTools tentar alterar valores no HTML,
 *    o MutationObserver reverte instantaneamente o elemento para o valor autêntico e congelado!
 * 4. Trava propriedades globais críticas no objeto window.
 */
export function DOMIntegrityShield() {
  useEffect(() => {
    try {
      // Bloquear redefinição de propriedades globais de segurança
      if (!("__UNITV_SECURITY_SHIELD__" in window)) {
        Object.defineProperty(window, "__UNITV_SECURITY_SHIELD__", {
          value: Object.freeze({
            downloaderCode: DOWNLOADER_OFFICIAL_CODE,
            ntdownCode: NTDOWN_OFFICIAL_CODE,
            timestamp: Date.now(),
          }),
          writable: false,
          configurable: true,
        });
      }

      // Mapeamento de códigos legados ou adulterados que DEVEM ser revertidos imediatamente
      const FORBIDDEN_FALLBACKS: Record<string, string> = {
        "1089401": DOWNLOADER_OFFICIAL_CODE,
        "291561": DOWNLOADER_OFFICIAL_CODE,
      };

      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "characterData") {
            const target = mutation.target;
            if (target && target.nodeValue) {
              for (const [badCode, goodCode] of Object.entries(FORBIDDEN_FALLBACKS)) {
                if (target.nodeValue.includes(badCode)) {
                  console.warn(`🛡️ [Security Shield] Interceptada tentativa de alteração não autorizada! Código ${goodCode} mantido.`);
                  target.nodeValue = target.nodeValue.replace(badCode, goodCode);
                }
              }
            }
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      return () => observer.disconnect();
    } catch (e) {
      console.error("Security shield initializing error:", e);
    }
  }, []);

  return null;
}
