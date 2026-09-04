export type FounderCertification = {
  code: string;
  name: string;
};

export type Founder = {
  code: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  certifications?: FounderCertification[];
};

export const founders: Founder[] = [
  {
    code: 'SÓCIO A',
    name: 'Rafael Arcanjo',
    role: 'Desenvolvedor Web',
    bio: 'Formado em Análise e Desenvolvimento de Sistemas, atua com React, Next.js, TypeScript, Supabase, integrações e automações. Na Tekton, transforma necessidades de negócio em soluções digitais funcionais, responsivas e preparadas para evoluir.',
    image: '/assets/rafael-arcanjo.webp',
  },
  {
    code: 'SÓCIO B',
    name: 'Kaio Seabra',
    role: 'Desenvolvedor Web — Back-end e AWS',
    bio: 'Desenvolvedor web com foco em back-end e infraestrutura em nuvem. Na Tekton, trabalha na construção de APIs, regras de negócio e serviços preparados para operar com segurança, estabilidade e evolução na AWS.',
    image: '/assets/kaio-seabra.jpg',
    certifications: [
      {
        code: 'AWS CLF-C02',
        name: 'AWS Certified Cloud Practitioner',
      },
    ],
  },
  {
    code: 'SÓCIO C',
    name: 'Miguel Leite',
    role: 'Desenvolvedor Web — Dados e APIs',
    bio: 'Desenvolvedor web com foco em bancos de dados e comunicação entre sistemas. Na Tekton, estrutura persistência, consultas e requisições de API para manter informações consistentes e fluxos confiáveis.',
    image: '/assets/miguel-leite.jpg',
  },
];

export const services = [
  {
    verb: 'Evoluir',
    title: 'Sites que já existem',
    description:
      'Reorganizamos, atualizamos e otimizamos sites institucionais e de vendas sem ignorar o que já funciona. O objetivo é reduzir atrito, atualizar a percepção da marca e tornar a experiência mais eficiente.',
    deliverables: ['Diagnóstico do cenário atual', 'Revisão de conteúdo e navegação', 'Atualização visual e técnica'],
  },
  {
    verb: 'Construir',
    title: 'Sites institucionais',
    description:
      'Criamos a presença digital da empresa desde a arquitetura da informação até a publicação. Cada página nasce para explicar a proposta, sustentar credibilidade e transformar interesse em conversa.',
    deliverables: ['Estratégia e estrutura', 'Design responsivo', 'Desenvolvimento e publicação'],
  },
  {
    verb: 'Estruturar',
    title: 'Sistemas para cursos online',
    description:
      'Desenvolvemos ambientes próprios para organizar conteúdos, acompanhar alunos e apoiar a operação de produtos educacionais, com a experiência adequada ao negócio e ao público.',
    deliverables: ['Jornada de acesso e aprendizagem', 'Painéis operacionais', 'Base preparada para evoluir'],
  },
];
