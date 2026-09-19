export const siteConfig = {
  name: "Tekton Digital",
  description:
    "Estúdio tecnológico que combina estratégia, design e desenvolvimento para criar sites e sistemas que movem negócios.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Método", href: "#metodo" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Equipe", href: "#equipe" },
  ],
} as const;

export const services = [
  {
    index: "01",
    title: "Landing Pages",
    description:
      "Uma página, uma oferta e um caminho claro para transformar interesse em conversa comercial.",
    deliverables: ["Estratégia de conteúdo", "Design responsivo", "Medição e SEO técnico"],
  },
  {
    index: "02",
    title: "Sites Institucionais",
    description:
      "Presença digital consistente para explicar seu negócio, construir confiança e sustentar o crescimento.",
    deliverables: ["Arquitetura de informação", "Sistema visual", "Performance e publicação"],
  },
  {
    index: "03",
    title: "Sistemas Web",
    description:
      "Aplicações sob medida para tirar processos da planilha e organizar a operação com segurança.",
    deliverables: ["Mapeamento de fluxo", "Interface operacional", "Dados e integrações"],
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Entender",
    description: "Mapeamos o negócio, a decisão do cliente e o que a entrega precisa resolver.",
  },
  {
    index: "02",
    title: "Projetar",
    description: "Transformamos estratégia em arquitetura, conteúdo e uma direção visual própria.",
  },
  {
    index: "03",
    title: "Construir",
    description: "Desenvolvemos com atenção a velocidade, acessibilidade, SEO e manutenção.",
  },
  {
    index: "04",
    title: "Entregar",
    description: "Validamos a experiência completa e deixamos a operação pronta para evoluir.",
  },
] as const;

export const team = [
  {
    name: "Rafael Arcanjo",
    role: "Desenvolvimento de produto",
    description: "Traduz necessidades de negócio em interfaces claras e produtos digitais consistentes.",
    image: "/assets/team/rafael-arcanjo.webp",
  },
  {
    name: "Kaio Seabra",
    role: "Back-end e infraestrutura",
    description: "Constrói APIs, regras de negócio e infraestrutura com foco em estabilidade e evolução.",
    image: "/assets/team/kaio-seabra.webp",
  },
  {
    name: "Miguel Leite",
    role: "Dados e integrações",
    description: "Conecta dados, consultas e serviços para manter fluxos confiáveis de ponta a ponta.",
    image: "/assets/team/miguel-leite.webp",
  },
] as const;

export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá! Conheci a Tekton Digital pelo site e quero conversar sobre um projeto.",
    )}`
  : null;
