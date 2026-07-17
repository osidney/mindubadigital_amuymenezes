# Amuy Menezes Advocacia — Site

Novo site do escritório Amuy Menezes Advocacia, construído com [Astro](https://astro.build) 7 (site estático, sem dependências de framework JS).

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # ambiente de desenvolvimento (http://localhost:4321)
npm run build      # gera o site estático em dist/ (URLs de produção)
npm run preview    # pré-visualiza o build de produção

# Build de homologação (canonical/OG apontando para o domínio temporário):
PUBLIC_SITE_URL="https://seu-dominio-temporario" npm run build
```

O deploy é a pasta `dist/` — basta servir os arquivos estáticos (Netlify, Vercel, Cloudflare Pages, hospedagem comum etc.).

O `dist/` já inclui um **`.htaccess`** (Apache/LiteSpeed) com compressão de texto e
política de cache: assets com hash (`/_astro/`) por 1 ano imutável, fontes por 1 ano,
imagens por 1 mês e HTML sempre revalidado. Ao subir os arquivos, inclua o `.htaccess`
(ele é um arquivo oculto — verifique se o cliente de FTP o copiou).

## Estrutura

```
public/
  favicon.ico
  fonts/           # Marcellus, Plus Jakarta Sans, Whisper (woff2 self-hosted)
  images/          # todas as imagens do site (100% locais)
src/
  data/site.ts     # conteúdo central: contatos, WhatsApp, áreas, depoimentos
  layouts/Base.astro
  components/      # Header, Hero, PracticeAreas, About, Testimonials, Contact...
  pages/           # index, privacidade, cookies
  styles/global.css
```

## Identidade

- **Cores**: dourado `#ebc17d` / `#d8b460` sobre tinta `#0c0c0e`, off-white `#faf6ec` (extraídas do logo, símbolo e materiais do site anterior).
- **Tipografia**: Marcellus (títulos), Plus Jakarta Sans (texto), Whisper (destaques manuscritos).

## Contato / Conversão

Todos os CTAs apontam para o WhatsApp **(62) 98467-1617** (`wa.me/5562984671617`)
com mensagens pré-preenchidas por contexto — configuráveis em `src/data/site.ts`
(`whatsappMessages`).
