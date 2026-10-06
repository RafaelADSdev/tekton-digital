# Tekton Labs

Site institucional da [Tekton Labs](https://github.com/Tekton-DigitalBR/tekton-digital-site): uma página que apresenta a oferta, mostra trabalho real e abre conversa no WhatsApp. O visitante compara fornecedores no celular e precisa entender, em poucos segundos, o que a casa entrega e com quem vai falar.

A página cobre três frentes — landing pages, sites institucionais e sistemas web — com o case da Náutica Engenharia, a evidência técnica desta própria página e os três sócios que executam o projeto.

## Stack

| Camada | Uso |
| --- | --- |
| Next.js 16 (App Router) | Páginas, metadados, sitemap e a rota `/api/leads` |
| React 19 e TypeScript | Interface |
| Tailwind CSS 4 | Estilo em `src/app/globals.css` |
| Supabase | Persistência de leads, só no servidor |
| Zod | Validação do payload de contato |
| Vitest | Testes do schema de lead |

Fontes: Plus Jakarta Sans nos títulos e Inter no texto. Idioma da interface: `pt-BR`.

## Rodar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

O site sobe sem Supabase. O canal de contato da página é o WhatsApp, e o número padrão já está em `src/data/site.ts`.

## Onde mexer

| Quer mudar | Arquivo |
| --- | --- |
| Textos, serviços, sócios, WhatsApp e notas técnicas | `src/data/site.ts` |
| Composição da home | `src/app/page.tsx` |
| Cabeçalho | `src/components/Header.tsx` |
| Comparativo antes/depois do case | `src/components/CaseCompare.tsx` |
| Visual | `src/app/globals.css` |
| Título, descrição e Open Graph | `src/app/layout.tsx` |
| Política de privacidade | `src/app/privacidade/page.tsx` |
| Capturas, retratos e logo | `public/assets/` |

A origem das imagens está em `public/assets/ASSET_SOURCES.md`. Não substitua retrato ou case por material genérico.

## Rotas

| Caminho | Função |
| --- | --- |
| `/` | Home: oferta, serviços, portfólio, evidência técnica, sócios e contato |
| `/privacidade` | Política de privacidade |
| `/api/leads` | `POST` que valida e grava um lead |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |
| `/opengraph-image` | Imagem de compartilhamento, 1200×630 |

Âncoras da home: `#servicos`, `#portfolio`, `#equipe`, `#contato`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Nada disso vai para o Git.

| Variável | Obrigatória | Efeito |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Na publicação | Origem canônica de metadados, sitemap e dados estruturados. Sem barra no fim. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Não | Dígitos com país e DDD, por exemplo `5581999999999`. Se ficar vazia, vale o número em `src/data/site.ts`. |
| `SUPABASE_URL` | Só para gravar leads | URL do projeto Supabase. |
| `SUPABASE_SECRET_KEY` | Só para gravar leads | Chave secreta, lida apenas em `src/lib/supabase-admin.ts`. |
| `SUPABASE_SERVICE_ROLE_KEY` | Não | Fallback para projetos Supabase antigos. Prefira `SUPABASE_SECRET_KEY`. |

Chave secreta nunca usa prefixo `NEXT_PUBLIC_`. Sem as credenciais do Supabase, `POST /api/leads` responde indisponível e não finge que gravou.

## Contato

A home não tem formulário. Cada serviço e o bloco final abrem o WhatsApp com uma mensagem já escrita. O componente `src/components/LeadForm.tsx` e a rota `/api/leads` continuam no repositório para uma captação futura; hoje não estão ligados à página.

A rota, quando usada, exige JSON, recusa corpo acima de 12 KB, limita 5 envios a cada 10 minutos por IP e ignora o campo-isca `website`. O registro entra em `public.leads` com `source = site-tektonlabs`.

## Banco

`supabase/migrations` cria `public.leads`, liga RLS e revoga leitura e escrita dos papéis `anon` e `authenticated`. A escrita fica só no servidor.

Aplique as migrações pela CLI do Supabase, na ordem dos arquivos:

1. `20260919003136_create_leads.sql`
2. `20260920210000_rename_lead_source.sql`

Depois, confira três coisas: um `POST` autenticado pela chave secreta grava a linha, a chave pública não lê nem escreve a tabela, e o painel mostra o registro completo.

## Scripts

```bash
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm test           # schema de lead
npm run build      # build de produção
npm start          # serve o build
```

`vercel.json` declara o framework Next.js para o deploy.

## Antes de publicar

- Defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial.
- Confirme o número de WhatsApp que deve aparecer nos botões.
- Revise `/privacidade`: o texto ainda descreve coleta por formulário e precisa do contato do controlador.
- Rode o PageSpeed na URL publicada. A auditoria local não substitui o ambiente final.
