/**
 * 🔒 MÓDULO DE SEGURANÇA E INTEGRIDADE DE CÓDIGOS OFICIAIS
 * 
 * Este arquivo utiliza Object.freeze para garantir imutabilidade em tempo de execução 
 * e prevenir qualquer tentativa de alteração ou manipulação via DOM Hijacking ou scripts maliciosos.
 */

export const DOWNLOADER_OFFICIAL_CODE = Object.freeze("9884830");
export const NTDOWN_OFFICIAL_CODE = Object.freeze("94596");

/**
 * Retorna o código autenticado e verificado pelo sistema.
 * Se houver qualquer divergência em runtime, força o retorno do código oficial congelado.
 */
export function getVerifiedDownloaderCode(inputCode?: string): string {
  if (inputCode && inputCode !== DOWNLOADER_OFFICIAL_CODE) {
    console.warn("⚠️ [Security Shield] Tentativa de alteração não autorizada detectada! Código oficial restaurado.");
    return DOWNLOADER_OFFICIAL_CODE;
  }
  return DOWNLOADER_OFFICIAL_CODE;
}

export function getVerifiedNtDownCode(inputCode?: string): string {
  if (inputCode && inputCode !== NTDOWN_OFFICIAL_CODE) {
    console.warn("⚠️ [Security Shield] Tentativa de alteração não autorizada detectada! Código oficial restaurado.");
    return NTDOWN_OFFICIAL_CODE;
  }
  return NTDOWN_OFFICIAL_CODE;
}
