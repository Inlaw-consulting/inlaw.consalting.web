export const WHATSAPP_PHONE = '+7 700 146 6646';
export const WHATSAPP_URL = 'https://wa.me/77001466646';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

// GTM conversion: fired on every "get consultation" click that opens WhatsApp.
export function trackWhatsAppClick() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'generate_lead', lead_form: 'contact_form', lead_method: 'whatsapp' });
}
