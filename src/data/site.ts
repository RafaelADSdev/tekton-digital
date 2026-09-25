export const siteConfig = {
  name: "Tekton Labs",
  description:
    "Criação de landing pages, desenvolvimento de sites institucionais e sistemas web complexos. Código próprio, design de alta performance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sócios", href: "#equipe" },
  ],
} as const;

export const services = [
  {
    title: "Landing Pages de Alta Performance",
    description:
      "Uma página feita para uma oferta só, com um único trabalho: fazer quem chega pelo anúncio ou pelo Google chamar você. Abre rápido no celular, explica o que você vende em poucos segundos e leva direto para o contato.",
    deliverables: [
      "Estrutura e texto pensados para conversão",
      "Carregamento rápido no celular",
      "Medição de cliques e contatos",
    ],
    cta: "Quero uma landing page",
    whatsappMessage:
      "Olá! Vim pelo site da Tekton e quero conversar sobre uma landing page.",
  },
  {
    title: "Sites Institucionais",
    description:
      "O site que o seu cliente abre antes de fechar com você. Mostra quem é a empresa, o que ela faz e por que confiar, com um visual à altura do seu trabalho. Aparece bem no Google e tem um painel para você atualizar textos e fotos sem depender de ninguém.",
    deliverables: [
      "Páginas organizadas para o seu cliente",
      "Visual próprio, sem template",
      "Publicação, SEO e manutenção",
    ],
    cta: "Quero um site institucional",
    whatsappMessage:
      "Olá! Vim pelo site da Tekton e quero conversar sobre um site institucional.",
  },
  {
    title: "Sistemas Web Complexos",
    description:
      "Para quando a planilha, o grupo de WhatsApp e a ferramenta pronta já não dão conta. Construímos painéis internos, áreas de cliente, integrações e automações com as regras do seu negócio. Código documentado e seu, para evoluir sem ficar preso a nós.",
    deliverables: [
      "Mapeamento do processo atual",
      "Painéis e telas de operação",
      "Integrações e automações",
    ],
    cta: "Quero um sistema sob medida",
    whatsappMessage:
      "Olá! Vim pelo site da Tekton e quero conversar sobre um sistema web sob medida.",
  },
] as const;

export const auditScores = [
  {
    label: "Acessibilidade",
    score: 100,
    hint: "Pessoas com deficiência visual ou motora conseguem usar o site.",
  },
  {
    label: "Boas práticas",
    score: 100,
    hint: "Conexão segura e código sem erros. Sem aviso de site inseguro.",
  },
  {
    label: "SEO",
    score: 100,
    hint: "O Google consegue ler, entender e indexar cada página.",
  },
] as const;

// Cada item traz o termo técnico (para quem é da área) e o efeito prático
// (para quem não é). O texto deve servir aos dois leitores ao mesmo tempo.
export const technicalEvidence = [
  {
    term: "HTML semântico",
    benefit: "Aparece melhor no Google e é fácil de manter",
    description:
      "Cada parte da página é marcada pelo que ela é: título, menu, serviço, contato. O Google entende o conteúdo e posiciona melhor nas buscas, leitores de tela conseguem navegar e qualquer desenvolvedor encontra o que precisa alterar sem quebrar o resto.",
  },
  {
    term: "Imagens responsivas em WebP",
    benefit: "Abre rápido mesmo no 4G",
    description:
      "O celular baixa a imagem no tamanho da própria tela, num formato mais leve que JPG e PNG. A página carrega antes, gasta menos internet do visitante e ninguém desiste esperando.",
  },
  {
    term: "Core Web Vitals",
    benefit: "A velocidade que o Google mede",
    description:
      "São as métricas do Google para tempo de carregamento, resposta ao toque e estabilidade da tela. Contam no ranqueamento e decidem se o visitante fica ou volta para a busca. A página é construída para ir bem nelas.",
  },
  {
    term: "Acessibilidade (WCAG)",
    benefit: "Ninguém fica de fora",
    description:
      "Contraste legível, navegação completa pelo teclado e descrição nas imagens para leitores de tela. Mais gente consegue usar o site, e ele atende ao que a Lei Brasileira de Inclusão pede de sites de empresas.",
  },
  {
    term: "SEO técnico e dados estruturados",
    benefit: "O Google mostra a sua empresa do jeito certo",
    description:
      "Título, descrição, mapa do site e dados no padrão schema.org dizem ao Google quem é a empresa, o que ela faz e onde atende. O resultado da busca sai completo, e o link compartilhado no WhatsApp aparece com imagem e descrição.",
  },
  {
    term: "Movimento reduzido",
    benefit: "Animação que respeita quem visita",
    description:
      "Quem configura o celular para reduzir animações, por enjoo ou sensibilidade, vê o site sem os efeitos de movimento. Todo o conteúdo continua lá, só que parado.",
  },
] as const;

export const team = [
  {
    name: "Miguel Leite",
    description:
      "Organiza os projetos e os prazos. É quem mantém tudo andando no tempo combinado.",
    image: "/assets/team/miguel-leite.webp",
  },
  {
    name: "Kaio Seabra",
    description:
      "Conversa com você primeiro. Entende o que você precisa e alinha escopo, prazo e preço.",
    image: "/assets/team/kaio-seabra.webp",
  },
  {
    name: "Rafael Arcanjo",
    description:
      "Escreve o código do projeto. Continua cuidando dele depois que o site entra no ar.",
    image: "/assets/team/rafael-arcanjo.webp",
  },
] as const;

// Número comercial publicado no site. A variável de ambiente tem prioridade
// para trocar o canal sem novo deploy de código.
export const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581985932808"
).replace(/\D/g, "");

export function buildWhatsappHref(message: string) {
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;
}

export const whatsappHref = buildWhatsappHref(
  "Olá! Vim pelo site da Tekton. Quero conversar sobre um projeto.",
);
