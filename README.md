# Tekton Digital

Site institucional e portfólio da Tekton Digital, construído com Next.js, React, TypeScript, Tailwind CSS e Supabase.

## Rodar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

- `NEXT_PUBLIC_SITE_URL`: origem pública usada em metadados, sitemap e dados estruturados.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número com país e DDD, apenas dígitos. O CTA só aparece quando o valor é válido.
- `SUPABASE_URL`: URL do projeto Supabase.
- `SUPABASE_SECRET_KEY`: chave secreta usada exclusivamente pela rota de servidor. Projetos antigos podem usar `SUPABASE_SERVICE_ROLE_KEY`.

Nunca use uma chave secreta em variável `NEXT_PUBLIC_*`.

## Banco de dados

A migração em `supabase/migrations` cria a tabela `public.leads`, habilita RLS e remove acesso dos papéis públicos. O formulário grava por `/api/leads`, no servidor.

Depois de conectar um projeto Supabase, aplique a migração pelo fluxo oficial da CLI e valide:

1. Inserção pelo formulário com as variáveis configuradas.
2. Ausência de leitura ou escrita da tabela com chave pública.
3. Registro completo no painel do projeto.

Sem credenciais, o formulário retorna uma mensagem de indisponibilidade e não simula sucesso.

## Validação local

```bash
npm run typecheck
npm test
npm run build
```

As imagens de portfólio e equipe são materiais reais do projeto anterior da Tekton. A origem e o processamento estão documentados em `public/assets/ASSET_SOURCES.md`.

## Pendências antes da publicação

- Informar domínio oficial e número comercial de WhatsApp.
- Conectar e validar um projeto Supabase real.
- Revisar o texto jurídico e incluir o contato do controlador de dados.
- Executar PageSpeed Insights na URL publicada; o objetivo de 95+ mobile depende do ambiente final.
