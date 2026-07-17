// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Em homologação, publique com: PUBLIC_SITE_URL="https://seu-dominio-temporario" npm run build
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://www.amuymenezes.com.br',
  build: {
    // Embute o CSS no HTML: elimina a requisição render-blocking (melhora LCP/FCP).
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      // Gera JS moderno (sem transpilação legada), reduzindo o bundle.
      target: 'es2022',
    },
  },
});
