type Log = {
  date: string;
  position: string;
};

type CompanyDetail = {
  companyName: string;
  color: string;
  about: string[];
  duration: string;
  logo: string;
  roleDetails: string[];
  log: Log[];
};

type ExperiencesType = {
  trybeExperience: CompanyDetail;
  atlasExperience: CompanyDetail;
};

export const experiences: ExperiencesType = {
  trybeExperience: {
    companyName: 'Trybe - Escola de Tecnologia online',
    color: '#1EB720',
    about: [
      `A Trybe é uma escola de tecnologia online fundada em 2019, que oferece um currículo prático, desenvolvido em parceria com empresas do setor. A abordagem da Trybe combina teoria e prática, preparando os alunos com habilidades técnicas essenciais, como desenvolvimento web, análise de dados e ciência da computação.`,

      `Além do conhecimento técnico, a Trybe forma profissionais competentes e prontos para o mercado, enfatizando competências comportamentais como trabalho em equipe, resolução de problemas e adaptabilidade. Com um compromisso com a inclusão e diversidade, a Trybe conecta talentos a oportunidades valiosas, contribuindo para o fortalecimento da indústria de tecnologia.`,
    ],
    duration: 'ago de 2021 | ago de 2022',
    logo: 'https://github.com/user-attachments/assets/9bc146b0-e28f-42b2-bcb8-c69ab3ad829c',
    roleDetails: [
      'Aprofundamento nos fundamentos do desenvolvimento web, incluindo Git, Unix, Bash, HTML, CSS e JavaScript.',
      'Desenvolvimento de aplicações frontend utilizando TypeScript, React, React Hooks e React Router, com ênfase em acessibilidade e usabilidade.',
      'Implementação de testes unitários e automação de testes com React Testing Library, garantindo a qualidade e robustez do código.',
      'Desenvolvimento de backend em Node.js, incluindo Programação Orientada a Objetos, construção de APIs REST com Express.js e gerenciamento de banco de dados MySQL utilizando Sequelize.',
      'Utilização de Docker para contêinerização de aplicações, promovendo um ambiente de desenvolvimento eficiente.',
      'Participação ativa em projetos em grupo, praticando habilidades interpessoais como pensamento crítico, colaboração e comunicação assertiva.',
      'Participação em workshops e atividades de soft skills, promovendo liderança e trabalho em equipe em um ambiente dinâmico e desafiador.',
    ],

    log: [
      {
        date: 'ago de 2021',
        position: 'Fundamentos do Desenvolvimento Web',
      },
      {
        date: '2021',
        position: 'Desenvolvimento Front-End',
      },
      {
        date: '2021',
        position: 'Desenvolvimento Back-End',
      },
      {
        date: '2021',
        position: 'Ciência da Computação',
      },
      {
        date: 'ago de 2022',
        position: 'Desenvolvimento Web',
      },
    ],
  },

  atlasExperience: {
    companyName: 'Atlas - Segurança e Inteligência Logística',
    color: '#FF5618',
    duration: 'out de 2022 | jun de 2024',
    logo: 'https://github.com/user-attachments/assets/09513a1b-c465-45ae-bcc1-666bf6523251',
    about: [
      `A Atlas atua no mercado de Segurança e Inteligência Logística, reconhecida pelo seu trabalho em
        proteger operações logísticas por meio de soluções tecnológicas de ponta. Atuando desde 2004, a
        empresa se destaca por atender centenas de clientes de diversos setores e tamanhos, oferecendo um alto
        nível de segurança e controle para suas operações.`,

      `Com um compromisso sólido de qualidade, a Atlas adota uma abordagem personalizada, ajustando suas
        soluções às necessidades específicas de cada cliente. Esse foco em inovação e atendimento diferenciado
        a posiciona como uma referência no mercado, com parcerias de longo prazo e uma reputação de
        excelência. Trabalhar na Atlas significa atuar em uma equipe qualificada e apaixonada, empenhada em
        entregar o melhor em segurança e tecnologia logística.`,
    ],
    roleDetails: [
      'Desenvolvi e mantive aplicações web modernas e dinâmicas, utilizando Next.js, React, TypeScript, Context API, Redux e Material UI para garantir interfaces intuitivas e responsivas.',
      'Colaborei com designers no Figma para criar experiências de usuário otimizadas, alinhando design e funcionalidade.',
      'Desenvolvi componentes performáticos, priorizando eficiência e reutilização para otimizar a experiência do usuário e o desempenho da aplicação.',
      'Documentei minhas atividades de desenvolvimento, mantendo registros claros para facilitar manutenções futuras e o alinhamento da equipe.',
      'Realizei atualizações e manipulação de dados em bancos de dados como MongoDB e MySQL, garantindo integridade e performance dos dados.',
      'Implementei microsserviços em Node.js para automatizar tarefas, aprimorando processos internos e aumentando a produtividade da equipe.',
      'Participei de reuniões diárias de alinhamento, reportando o progresso das atividades e colaborando para o sucesso coletivo do projeto.',
    ],
    log: [
      {
        date: 'out de 2022',
        position: 'Desenvolvedor Frontend',
      },
      {
        date: '2024',
        position: 'Desenvolvedor FullStack',
      },
    ],
  },
};

export type ComapnyIdType = 'trybeExperience' | 'atlasExperience';

export type ExperienceType = Log & {
  companyId: ComapnyIdType;
};

export const firstPageOfTheCarouselOfExperiences: ExperienceType[] = [
  {
    companyId: 'trybeExperience',
    date: 'ago de 2021',
    position: 'Fundamentos do Desenvolvimento Web',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Desenvolvimento Front-End',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Desenvolvimento Back-End',
  },
  {
    companyId: 'trybeExperience',
    date: '2021',
    position: 'Ciência da Computação',
  },
];

export const secondPageOfTheCarouselOfExperiences: ExperienceType[] = [
  {
    companyId: 'trybeExperience',
    date: 'ago de 2022',
    position: 'Desenvolvimento Web',
  },
  {
    companyId: 'atlasExperience',
    date: 'out de 2022',
    position: 'Desenvolvedor Frontend',
  },
  {
    companyId: 'atlasExperience',
    date: '2024',
    position: 'Desenvolvedor FullStack',
  },
];
