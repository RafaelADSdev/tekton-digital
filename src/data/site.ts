export const siteConfig = {
  name: "Tekton Digital",
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
      "Criação de landing pages com uma função específica: transformar visitante em conversa. Carregamento rápido, estrutura semântica limpa, responsividade testada em dispositivo real — não só no emulador. Cada elemento da página existe porque tem trabalho a fazer.",
    deliverables: ["Arquitetura de conteúdo", "Design responsivo", "SEO técnico e medição"],
  },
  {
    title: "Sites Institucionais",
    description:
      "Desenvolvimento de sites institucionais para empresas que precisam ser levadas a sério quando alguém pesquisa o nome delas. Arquitetura de informação clara, SEO técnico resolvido na base e um painel para você atualizar conteúdo sem depender de terceiros.",
    deliverables: ["Arquitetura de informação", "Sistema visual próprio", "Publicação e manutenção"],
  },
  {
    title: "Sistemas Web Complexos",
    description:
      "Painéis internos, áreas autenticadas, integrações com API, automações e regras de negócio que não cabem em ferramenta pronta. Sistemas web complexos com código versionado, documentado e escrito para ser mantido por outra pessoa depois — inclusive por você.",
    deliverables: ["Mapeamento de fluxo", "Interface operacional", "Dados e integrações"],
  },
] as const;

export const team = [
  {
    name: "Miguel Leite",
    role: "Dados e integrações",
    description:
      "Conecta bancos de dados, APIs e serviços externos. É quem garante que a informação chegue certa ao destino e continue chegando depois que o projeto entra em operação.",
    image: "/assets/team/miguel-leite.webp",
  },
  {
    name: "Kaio Seabra",
    role: "Back-end e infraestrutura",
    description:
      "Responde pelo back-end e pela infraestrutura. Define como o sistema vai aguentar o uso real antes de ele existir, e é quem levanta a mão quando uma ideia não se sustenta em produção.",
    image: "/assets/team/kaio-seabra.webp",
  },
  {
    name: "Rafael Arcanjo",
    role: "Produto e interface",
    description:
      "Cuida do produto e da interface. Traduz a necessidade do negócio em telas que a pessoa entende sem manual, e escreve o front-end que sustenta isso.",
    image: "/assets/team/rafael-arcanjo.webp",
  },
] as const;

export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá! Vim pelo site da Tekton. Quero conversar sobre um projeto.",
    )}`
  : null;
