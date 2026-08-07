/**
 * Safe WhatsApp URL handler.
 * On mobile devices, uses wa.me protocol to open the native WhatsApp application.
 * On desktop browsers, uses web.whatsapp.com directly to avoid api.whatsapp.com 
 * cross-origin / adblocker / iframe connection blocks.
 */
export function openWhatsApp(phone: string, message: string) {
  const encodedMsg = encodeURIComponent(message);
  const isMobile =
    typeof window !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const targetUrl = isMobile
    ? `https://wa.me/${phone}?text=${encodedMsg}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;

  window.open(targetUrl, "_blank", "noopener,noreferrer");
}

export function handleWhatsAppClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  phone: string,
  message: string
) {
  e.preventDefault();
  openWhatsApp(phone, message);
}
