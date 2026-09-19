---
name: "Tekton Digital"
description: "Uma mesa de execução digital que transforma rigor, prova real e decisão em uma linguagem visual premium."
colors:
  mineral-black: "#09090b"
  graphite-sheet: "#121217"
  graphite-raised: "#18181f"
  proof-paper: "#ededeb"
  paper-white: "#fafafa"
  muted-copy: "#a1a1aa"
  strong-muted-copy: "#c7c7cf"
  fine-rule: "rgba(250, 250, 250, 0.13)"
  strong-rule: "rgba(250, 250, 250, 0.24)"
  execution-violet: "#8b5cf6"
  deep-violet: "#6d28d9"
  pale-violet: "#c4b5fd"
  violet-hover: "#9f7aea"
  action-ink: "#0b0712"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Arial, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 6.65rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Plus Jakarta Sans, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.7vw, 5.2rem)"
    fontWeight: 690
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Plus Jakarta Sans, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 3rem)"
    fontWeight: 650
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "0.58rem"
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: "0.13em"
  action:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 800
rounded:
  brand: "0.4rem"
  field: "0.5rem"
  compact-control: "0.65rem"
  action: "0.7rem"
  frame: "0.8rem"
  device: "1.25rem"
  round: "50%"
spacing:
  xs: "0.45rem"
  sm: "0.8rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
  section-y: "clamp(5.5rem, 10vw, 9.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.execution-violet}"
    textColor: "{colors.action-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "0.85rem 1.35rem"
    height: "3.45rem"
  button-primary-hover:
    backgroundColor: "{colors.violet-hover}"
    textColor: "{colors.action-ink}"
  text-link:
    textColor: "{colors.paper-white}"
    padding: "0 0 0.25rem"
    height: "3rem"
  input-field:
    backgroundColor: "{colors.graphite-sheet}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.field}"
    padding: "0 0.9rem"
    height: "3.15rem"
  section-index:
    textColor: "{colors.execution-violet}"
    typography: "{typography.label}"
  approval-stamp:
    textColor: "{colors.deep-violet}"
    typography: "{typography.label}"
    padding: "0.65rem 0.9rem"
  proof-board:
    backgroundColor: "{colors.graphite-sheet}"
    textColor: "{colors.paper-white}"
    padding: "3rem 1.4rem 4rem"
  metric-tile:
    backgroundColor: "{colors.execution-violet}"
    textColor: "{colors.mineral-black}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
---

# Design System: Tekton Digital

## Overview

**Creative North Star: "Mesa de Execução Digital"**

A Tekton parece uma bancada onde decisões digitais são examinadas, marcadas e aprovadas. O preto mineral cria silêncio; folhas de grafite, réguas finas, índices funcionais e anotações violetas dão precisão operacional. Fotografias e capturas reais entram como evidência material, com enquadramento cuidadoso e sem enfeite que concorra com o trabalho.

O sistema combina densidade editorial com controles que lembram comandos de aprovação. A expressão é premium porque cada contraste tem função: tipografia grande estabelece direção, texto menor documenta, linhas organizam e o violeta confirma ação, progresso ou foco. Movimento é breve e responsivo, sempre complementar a um conteúdo que já permanece legível sem JavaScript.

**Key Characteristics:**

- Fundo mineral contínuo com folhas de grafite e uma superfície clara reservada a provas.
- Réguas de um pixel, grandes índices funcionais e pequenas legendas em caixa alta.
- Violeta usado como anotação, progresso, foco e decisão.
- Plus Jakarta Sans para direção; Inter para leitura e operação.
- Fotografias e interfaces reais enquadradas como artefatos de trabalho.
- Controles compactos, firmes e imediatamente acionáveis.

## Colors

A paleta alterna uma base mineral quase preta, camadas grafite e uma folha clara de prova; o violeta funciona como tinta de anotação e sinal de aprovação.

### Primary

- **Violeta de Execução:** cor de ações primárias, índices ativos, progresso e marcações que exigem atenção.
- **Violeta Profundo:** versão de maior autoridade para carimbos, linhas e texto sobre superfícies claras.

### Secondary

- **Violeta Pálido:** realce legível para palavras-chave, ícones, funções e foco sobre fundos escuros.
- **Violeta de Hover:** resposta luminosa exclusiva dos controles primários em interação.

### Neutral

- **Preto Mineral:** plano-base da interface e fundo contínuo entre as folhas de conteúdo.
- **Folha Grafite:** superfície estrutural para formulários, painéis e áreas que precisam se separar do plano-base.
- **Grafite Elevado:** camada tonal adicional para blocos internos que precisam de contraste sem sombra.
- **Papel de Prova:** superfície clara reservada a trabalho real, comparações e evidências que precisam respirar.
- **Branco Papel:** texto de maior contraste e conteúdo principal.
- **Texto Silencioso:** descrições e contexto de menor prioridade.
- **Texto Silencioso Forte:** leitura secundária que ainda precisa sustentar contraste funcional.
- **Régua Fina / Régua Forte:** divisores de um pixel que organizam a mesa e marcam limites sem formar caixas pesadas.

### Named Rules

**The Violet Annotation Rule.** O violeta marca ação, progresso, foco ou evidência; ele nunca vira preenchimento decorativo sem uma função clara.

**The Proof Paper Rule.** Superfícies claras aparecem como folhas de evidência deliberadas, e não como alternância arbitrária de seção.

## Typography

**Display Font:** Plus Jakarta Sans (com Arial e sans-serif como fallback)  
**Body Font:** Inter (com Arial e sans-serif como fallback)  
**Label/Mono Font:** Inter; o aspecto técnico vem de tamanho, peso, espaçamento e caixa alta, não de uma fonte monoespaçada.

**Character:** Plus Jakarta Sans dá autoridade geométrica a títulos e números, enquanto Inter mantém textos e controles diretos. A diferença de escala é proposital: direção grande, documentação compacta e leitura calma.

### Hierarchy

- **Display** (peso 700, `clamp(3rem, 5.6vw, 6.65rem)`, entrelinha 0.98): declara a tese principal com largura curta e tracking fechado.
- **Headline** (peso 690, `clamp(2.25rem, 4.7vw, 5.2rem)`, entrelinha 1.02): abre seções e mantém o mesmo pulso geométrico do display.
- **Title** (peso 650, `clamp(1.8rem, 3vw, 3rem)`, tracking -0.035em): nomeia entregas, etapas e blocos de evidência.
- **Body** (`1rem`, entrelinha 1.6; textos explicativos chegam a 1.75): explica contexto com largura controlada, normalmente entre 30 e 39rem.
- **Label** (peso 750, `0.58rem`, tracking 0.13em, caixa alta): identifica índices, metadados, carimbos e estados.
- **Action** (peso 800, `0.86rem`): dá aos comandos uma voz curta e decisiva.

### Named Rules

**The Functional Index Rule.** Tipos pequenos e espaçados sempre identificam estado, seção, medida ou evidência; nunca funcionam como textura vazia.

**The Scale Before Ornament Rule.** A hierarquia nasce de escala, peso e posição; efeitos tipográficos decorativos não substituem estrutura.

## Layout

O conteúdo usa um contêiner central de `min(92vw, 90rem)` e espaçamento vertical fluido de `clamp(5.5rem, 10vw, 9.5rem)`. A grade combina colunas assimétricas para colocar direção, explicação e prova em relações claras. Réguas, bordas contínuas e alinhamentos compartilhados conectam blocos que permanecem visualmente abertos.

Em telas largas, os grupos podem usar duas ou três colunas e o cabeçalho organiza marca, navegação e ação em três zonas. Em `1100px`, a navegação passa a um painel móvel. Em `820px`, composições principais colapsam para uma coluna, o contêiner passa a margens de `1.25rem` e as réguas se adaptam ao eixo disponível. Em `560px`, ações e campos ocupam toda a largura, listas preservam índices e o espaçamento prioriza toque e leitura.

**The Shared Ruler Rule.** Elementos relacionados devem compartilhar uma linha, um eixo ou um limite visível; a grade precisa parecer medida, não apenas centralizada.

## Elevation & Depth

O sistema é plano por padrão e cria profundidade primeiro por contraste tonal, sobreposição e regras. Sombras aparecem apenas quando um artefato precisa parecer fisicamente apoiado sobre a mesa: botão principal, prancha de prova, moldura de dispositivo ou formulário. Glows violetas pertencem a progresso e foco; não são iluminação ambiente genérica.

### Shadow Vocabulary

- **Ação apoiada** (`0 12px 38px rgba(109, 40, 217, 0.26)`): destaca o comando primário sem separá-lo do plano de trabalho.
- **Ação em resposta** (`0 14px 44px rgba(139, 92, 246, 0.36)`): acompanha a elevação de 2px no hover ou foco.
- **Prancha de prova** (`0 34px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.025)`): dá espessura à folha grafite e preserva uma borda interna precisa.
- **Moldura de evidência** (`0 24px 60px rgba(0, 0, 0, 0.48)`): separa uma captura real da prancha onde ela repousa.
- **Formulário apoiado** (`0 32px 80px rgba(0, 0, 0, 0.28)`): mantém o formulário como objeto principal dentro de uma folha grafite.

### Named Rules

**The Sheet-First Rule.** Antes de adicionar sombra, resolva a hierarquia com cor de superfície, borda de um pixel e sobreposição; elevação física fica reservada a objetos de prova e ação.

## Shapes

A forma dominante é a folha retangular, com cantos retos em seções, listas e painéis editoriais. Controles usam curvas compactas entre `0.4rem` e `0.8rem`; molduras de celular chegam a `1.25rem` para reconhecer o objeto físico. Círculos aparecem apenas em marcadores, lentes ambientais e índices de retrato. Carimbos e dispositivos podem receber uma rotação discreta para sugerir manuseio real.

Linhas de um pixel são parte estrutural da forma. Cantos de prancha recebem marcas violetas de inspeção, enquanto fotos são cortadas com precisão e permanecem dentro de molduras simples.

**The Measured Corner Rule.** Folhas e grades ficam retas; arredondamento pertence a controles compactos e objetos reconhecíveis, nunca a contêineres genéricos inflados.

## Components

Os componentes parecem instrumentos de uma mesa de aprovação: compactos, contrastados e explícitos sobre o que acontece em seguida.

### Buttons

- **Shape:** controle firme com curva compacta (`0.7rem`) e altura mínima de `3.45rem`.
- **Primary:** Violeta de Execução sobre Action Ink, padding `0.85rem 1.35rem`, peso 800 e ícone direcional alinhado ao texto.
- **Hover / Focus:** sobe `2px`, clareia para Violeta de Hover e amplia a sombra; foco global usa contorno de `2px` em Violeta Pálido com offset de `4px`.
- **Secondary / Ghost:** links de ação permanecem transparentes e recebem uma régua inferior; ações quadradas usam borda forte e mudam para violeta no hover.

### Chips

- **Style:** o carimbo de aprovação é retangular, transparente e contornado por Violeta Profundo, com texto pequeno, pesado e espaçado.
- **State:** a rotação discreta comunica marcação manual; chips neutros ou pílulas decorativas não fazem parte da linguagem atual.

### Cards / Containers

- **Corner Style:** folhas estruturais são retas; molduras de captura usam `0.75rem` a `0.8rem` e dispositivos usam curvas maiores.
- **Background:** Preto Mineral, Folha Grafite e Grafite Elevado formam a base; Papel de Prova é reservado a evidência.
- **Shadow Strategy:** plana para conteúdo; sombras estruturais apenas em pranchas, capturas e formulário.
- **Border:** réguas de `1px` em Fine Rule ou Strong Rule; acentos usam violeta com parcimônia.
- **Internal Padding:** painéis usam de `1.5rem` a `3rem`, com ritmo maior quando carregam evidência ou formulário.

### Inputs / Fields

- **Style:** Folha Grafite, borda Fine Rule, texto Branco Papel, curva de `0.5rem`, altura mínima de `3.15rem` e labels compactos em caixa alta.
- **Focus:** a borda assume Violeta de Execução e recebe anel `0 0 0 3px rgba(139, 92, 246, 0.12)`.
- **Error / Disabled:** mensagens usam cor sem remover o texto; o botão de envio mantém forma e reduz opacidade para 0.72 durante espera.

### Navigation

- **Desktop:** marca à esquerda, links centrais com sublinhado violeta animado e ação à direita, sobre vidro mineral fixo com blur de `18px`.
- **Mobile:** painel vertical abaixo do cabeçalho, itens com altura mínima de `4rem`, índice violeta e comando final preenchido.
- **Motion:** transições de estado usam majoritariamente `180ms ease`; o painel móvel combina opacidade e deslocamento de `1rem`.

### Section Index

Um número grande em Plus Jakarta Sans encosta em uma legenda pequena, espaçada e em caixa alta. O índice orienta a leitura e oferece uma assinatura reutilizável sem virar ornamento solto.

### Evidence Board

A prancha combina folha grafite, régua fina, marcas de inspeção violetas, metadados compactos e uma ou mais peças reais enquadradas. O conteúdo visual precisa ser evidência verificável; o contêiner existe para tornar essa prova legível e manipulável.

### Progress Ruler

Uma régua de um pixel recebe uma faixa violeta de `3px` que progride com o conteúdo. A transição usa `420ms cubic-bezier(0.22, 1, 0.36, 1)` e os índices mudam de cinza para Violeta Pálido quando ativos. Em telas estreitas, a régua muda de vertical para horizontal sem perder os quatro pontos de referência.

## Do's and Don'ts

### Do:

- Do usar o violeta para decisões, progresso, foco e anotações que tenham função identificável.
- Do construir hierarquia com grandes índices, alinhamentos compartilhados e réguas de um pixel.
- Do enquadrar fotografias e interfaces reais como prova, preservando proporção, nitidez e contexto.
- Do manter conteúdo e controles legíveis sem animação e respeitar `prefers-reduced-motion`.
- Do adaptar a grade para uma coluna e ações de largura total quando o espaço móvel exigir.

### Don't:

- Don't transformar toda superfície em cartão arredondado ou usar pílulas como decoração genérica.
- Don't espalhar glows e sombras por blocos editoriais que podem ser separados por tom e linha.
- Don't usar violeta em grandes áreas sem relação com ação, progresso, foco ou evidência.
- Don't inventar métricas, depoimentos ou imagens para preencher uma prancha de prova.
- Don't esconder conteúdo atrás de opacidade inicial, recorte ou movimento obrigatório.
