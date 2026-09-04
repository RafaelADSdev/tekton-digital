/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_WHATSAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
