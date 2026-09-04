# Tekton Digital

Site institucional da Tekton Digital, construído em Astro, TypeScript e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Validação de tipos e build:

```bash
npm run check
npm run build
```

## Conteúdo pendente

- Fundadores: atualize nomes, cargos, biografias e caminhos das fotos em `src/data/site.ts`.
- Case Náutica: as quatro capturas públicas estão em `public/assets/cases`. Para atualizá-las, execute `node scripts/capture-nautica-case.mjs` com acesso à rede e revise visualmente os arquivos antes de publicar.
- Contato: e-mail e WhatsApp estão configurados no site. O formulário prepara o briefing no aplicativo de e-mail ou no WhatsApp do visitante; as variáveis de `.env.example` permitem substituir os canais.
- URL pública: ao definir o domínio, adicione a propriedade `site` em `astro.config.ts` para ativar canonical e integrações dependentes do endereço final.

Nenhuma métrica, depoimento ou informação comercial foi inventada. Os estados pendentes permanecem visíveis para evitar publicação acidental de dados falsos.
