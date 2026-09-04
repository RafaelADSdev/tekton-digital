---
name: Tekton Digital
description: Precisão editorial para construir e transformar produtos digitais.
colors:
  structural-ink: "#08070a"
  soft-ink: "#151218"
  execution-violet: "#6d28d9"
  deep-violet: "#4c1d95"
  electric-purple: "#a855f7"
  technical-lilac: "#e9d5ff"
  drafting-mist: "#f4effa"
  technical-paper: "#fbfafc"
  pure-white: "#ffffff"
  muted-on-dark: "#aaa1b4"
  muted-on-light: "#5f5865"
typography:
  display:
    fontFamily: "Syne Variable, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 560
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Syne Variable, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 5.4rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Syne Variable, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 3rem)"
    fontWeight: 560
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 760
    lineHeight: 1.45
    letterSpacing: "0.09em"
rounded:
  square: "0"
  round: "999px"
spacing:
  group-sm: "0.75rem"
  group-md: "1.5rem"
  group-lg: "3rem"
  page-inline: "clamp(1.25rem, 4vw, 4rem)"
  section-block: "clamp(5.5rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.electric-purple}"
    textColor: "{colors.structural-ink}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.1rem"
    height: "3.5rem"
  button-disabled:
    backgroundColor: "#332e37"
    textColor: "{colors.muted-on-dark}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.1rem"
    height: "3.5rem"
  input-dark:
    backgroundColor: "{colors.structural-ink}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.square}"
    padding: "0.8rem 0"
---

# Design System: Tekton Digital

## Overview

**Creative North Star: "Lâminas de execução"**

A identidade da Tekton trata trabalho digital como matéria construída: planos pretos dão estrutura, folhas violetas translúcidas revelam processo e o branco técnico preserva clareza. A linguagem é profissional, precisa e contemporânea, mas a redação e a hierarquia mantêm proximidade humana.

O sistema evita a aparência intercambiável de agências de tecnologia. A personalidade vem de composição assimétrica, linhas de registro, superfícies em camadas e contraste tipográfico — nunca de efeitos soltos.

**Key Characteristics:**

- Estrutura editorial assimétrica e legível.
- Preto, violeta e branco usados como materiais, não ornamentos.
- Linhas finas, marcas de registro e códigos apenas onde comunicam processo.
- Movimento concentrado em uma passagem de luz ligada à leitura.
- Estados pendentes explícitos, sem simular conteúdo ou funcionalidade.

## Colors

A paleta alterna superfícies de alto contraste com campos violetas controlados; o roxo identifica construção e transformação.

### Primary

- **Violeta de Execução:** campo principal de marca, fundos de fechamento e lâminas intermediárias.
- **Púrpura Elétrica:** ações primárias, foco, seleção e a folha mais ativa.

### Secondary

- **Violeta Profundo:** profundidade entre planos e estados menos próximos.
- **Lilás Técnico:** texto secundário e informação de apoio sobre superfícies escuras ou violetas.

### Neutral

- **Preto Estrutural:** base da marca, cabeçalho, rodapé e áreas de autoridade.
- **Preto Suave:** painéis internos e campos que precisam se separar do preto principal.
- **Papel Técnico:** superfície editorial clara de maior prioridade.
- **Névoa de Projeto:** seção clara secundária, especialmente listas extensas.
- **Branco Puro:** conteúdo de maior contraste sobre preto.
- **Texto Atenuado Escuro/Claro:** informação secundária, sempre escolhida para o fundo correspondente.

**The Material Purple Rule.** Roxo representa plano ativo, ação ou transformação; nunca aparece como texto em gradiente ou decoração sem função.

**The Two Neutrals Rule.** Use preto estrutural ou papel técnico como chão; a névoa apenas diferencia passagens longas, não cria cartões flutuantes.

## Typography

**Display Font:** Syne Variable (com `sans-serif` como fallback)

**Body Font:** Manrope Variable (com `sans-serif` como fallback)

**Label/Mono Font:** pilha monoespaçada do sistema, restrita a códigos, medições e URLs.

**Character:** Syne cria títulos largos e arquitetônicos; Manrope sustenta leitura longa e controles com neutralidade. A diferença entre elas torna a hierarquia evidente sem depender de cor.

### Hierarchy

- **Display** (peso 560, escala fluida até 6rem, entrelinha 0.96): hero e chamadas finais curtas.
- **Headline** (peso 560, escala fluida até 5.4rem, entrelinha 1): títulos principais de seção.
- **Title** (peso 560, escala fluida até 3rem, entrelinha 1.06): serviços, fundadores e notas de case.
- **Body** (peso 400, escala fluida próxima de 1rem, entrelinha 1.75): explicações com medida ideal de 65–75 caracteres.
- **Label** (peso 760, 0.76rem, espaçamento 0.09em, caixa alta): rótulos funcionais e campos.

**The No Costume Mono Rule.** Monoespaçada comunica código, coordenada, URL ou medição; texto comercial permanece em Manrope ou Syne.

**The Direct Heading Rule.** Títulos começam a seção sem eyebrow decorativo acima deles.

## Layout

O conteúdo usa um invólucro central de até 1600px, respiro lateral fluido e seções com grande separação vertical. Grades 1.25/0.75 ou 1.2/0.8 criam tensão assimétrica; listas de serviço ocupam linhas editoriais inteiras em vez de cartões iguais.

Acima de 900px, proposta e prova visual podem dividir o quadro. Em 900px, grades principais colapsam para uma coluna e a navegação vira painel de tela cheia. Em 640px, fundadores, comparações e formulários se tornam lineares; o padding lateral nunca cai abaixo de 1.25rem. O breakpoint de 1100px faz apenas ajustes intermediários de proporção.

**The Whole-Sheet Rule.** Separações de conteúdo usam mudanças de superfície e linhas contínuas; não envolva cada ideia em um retângulo arredondado.

## Elevation & Depth

O sistema é plano por padrão. Profundidade surge quando uma folha física precisa se separar de outra: lâminas técnicas, controle do comparador e painel de contato recebem sombra com deslocamento e blur; superfícies editoriais comuns usam somente tom ou linha.

### Shadow Vocabulary

- **Folha elevada** (`12px 18px 44px rgb(0 0 0 / 34%)`): lâminas sobrepostas.
- **Controle em primeiro plano** (`6px 10px 24px rgb(0 0 0 / 28%)`): alça do comparador.
- **Painel de fechamento** (`14px 24px 64px rgb(35 7 72 / 28%)`): formulário preto sobre campo violeta.

**The Structural Depth Rule.** Sombra só separa planos que realmente se sobrepõem; halos coloridos e sombras sem deslocamento não pertencem ao sistema.

## Shapes

Botões, campos, painéis, folhas e blocos editoriais têm cantos retos. Círculos são reservados a cursores, alças e retratos provisórios. Bordas de 1px e marcas de canto dão precisão; a silhueta dominante continua sendo a folha retangular.

## Components

### Buttons

- **Shape:** retangular e direto, sem raio.
- **Primary:** púrpura elétrica sobre preto, altura mínima de 3.5rem e espaçamento interno compacto.
- **Hover / Focus:** elevação vertical suave; no foco, anel púrpura de 3px com offset de 4px.
- **Disabled:** painel cinza-violeta escuro, texto atenuado e cursor bloqueado; nunca imita uma ação disponível.

### Inputs / Fields

- **Style:** fundo preto, linha inferior translúcida, texto branco e rótulo lilás em caixa alta.
- **Focus:** linha púrpura e leve mudança tonal do campo.
- **Error / Disabled:** mensagem deve nomear o problema e o próximo passo; o formulário inteiro pode permanecer desabilitado quando o endpoint ainda não existe.

### Navigation

Marca compacta à esquerda, links em caixa alta à direita e CTA contornado. Em telas estreitas, a navegação ocupa o viewport e usa títulos grandes; `Escape` fecha o painel e o botão expõe `aria-expanded`.

### Technical Sheets

Folhas semitransparentes em três profundidades carregam verbos e diagramas exatos. A passagem de luz responde ao progresso local do bloco e percorre a pilha antes que ela saia do viewport; com movimento reduzido, as folhas permanecem estáticas e legíveis.

### Before/After Comparison

Dois planos compartilham o mesmo quadro e um range acessível controla a divisão. Um controle de estado alterna capturas equivalentes de desktop e mobile; em telas estreitas, mobile é a visão inicial. A alça circular é o único elemento elevado, e cada imagem real conserva dimensões, texto alternativo e origem documentada.

### Founder Portrait / Placeholder

Retratos confirmados ocupam integralmente o quadro com `object-fit: cover`, dimensões intrínsecas e texto alternativo nominal. Para sócios cujas fotos ainda não foram fornecidas, permanece o placeholder editorial com identificação, desenho linear e aviso de imagem em preparação. Certificações confirmadas aparecem abaixo da biografia como uma linha de credencial: código do exame em monoespaçada e o nome oficial da certificação, separados por uma linha fina — sem selos, pills ou logotipos inventados.

## Do's and Don'ts

### Do:

- **Do** use preto e papel como superfícies estruturais de página inteira.
- **Do** reserve o púrpura elétrico para ações, foco e o plano mais ativo.
- **Do** mantenha títulos diretos, grandes e balanceados, com no máximo 6rem.
- **Do** preserve conteúdo visível sem JavaScript e respeite redução de movimento.
- **Do** use estados pendentes honestos quando dados, imagens ou integrações ainda não existem.

### Don't:

- **Don't** transformar a página em uma grade de cartões arredondados iguais.
- **Don't** usar texto em gradiente, vidro decorativo ou halo colorido.
- **Don't** adicionar eyebrows acima de títulos de seção.
- **Don't** usar monoespaçada como fantasia de tecnologia em conteúdo comum.
- **Don't** inventar métricas, depoimentos, pessoas, canais ou capturas para preencher espaços.
