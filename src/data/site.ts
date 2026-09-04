export type FounderCertification = {
  code: string;
  name: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  certifications?: FounderCertification[];
};

export const founders: Founder[] = [
  {
    name: 'Rafael Arcanjo',
    role: 'Desenvolvedor Web',
    bio: 'React, Next.js e TypeScript para transformar necessidades de negócio em produtos digitais.',
    image: '/assets/rafael-arcanjo.webp',
  },
  {
    name: 'Kaio Seabra',
    role: 'Desenvolvedor Web — Back-end e AWS',
    bio: 'APIs, regras de negócio e infraestrutura na AWS com foco em estabilidade e evolução.',
    image: '/assets/kaio-seabra.jpg',
    certifications: [
      {
        code: 'AWS CLF-C02',
        name: 'AWS Certified Cloud Practitioner',
      },
    ],
  },
  {
    name: 'Miguel Leite',
    role: 'Desenvolvedor Web — Dados e APIs',
    bio: 'Persistência, consultas e integrações para manter dados consistentes e fluxos confiáveis.',
    image: '/assets/miguel-leite.jpg',
  },
];

export const services = [
  {
    verb: 'Evoluir',
    title: 'Sites que já existem',
    description:
      'Atualizamos e reorganizamos o que já funciona para reduzir atrito e renovar a percepção da marca.',
  },
  {
    verb: 'Construir',
    title: 'Sites institucionais',
    description:
      'Da estrutura à publicação — presença digital clara, credível e pronta para converter.',
  },
  {
    verb: 'Estruturar',
    title: 'Sistemas para cursos online',
    description:
      'Ambientes próprios para conteúdo, alunos e operação educacional.',
  },
];
