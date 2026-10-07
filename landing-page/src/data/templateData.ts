// =============================================================================
// templateData.ts — Arquivo Central de Dados & Personalização da Landing Page
// RP Soluções Inteligentes — Sanclerlândia / Goiás
// =============================================================================

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  startingPrice?: string;
  rating?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  city: string;
  avatar: string;
  installationImage: string;
  rating: number;
  highlight?: string;
  quote: string;
  stats?: {
    label: string;
    value: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StepItem {
  number: string;
  title: string;
  duration: string;
  description: string;
  subtitle?: string;
  timeline?: string;
  highlight?: string;
}

export interface PartnerBrand {
  id?: string;
  name: string;
  category: string;
  logoSrc?: string;
}

export const templateData = {
  company: {
    name: "RP Soluções Inteligentes",
    shortName: "RP Soluções",
    razaoSocial: "RP Solucoes Inteligentes Ltda. - ME",
    cnpj: "37.205.997/0001-26",
    phone: "(62) 9 9463-3753",
    phoneFormatted: "+55 (62) 99463-3753",
    whatsapp: "5562994633753",
    email: "rpsolucoesintelignetes@gmail.com",
    address: "Av. 5 de Janeiro, Quadra 10, Lote 10, Sala 01, Setor Cidade Velha",
    city: "Sanclerlândia",
    state: "GO",
    cep: "76160-000",
    hours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
    workingHours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
    tagline: "Gerando energia de forma inteligente e sustentável",
    subheadline:
      "Projetos de engenharia e instalação de energia solar fotovoltaica para residências, empresas e produtores rurais em Sanclerlândia e em todo o estado de Goiás. Descubra quanto você pode economizar com uma simulação gratuita e sem compromisso.",
    whatsappDefaultMessage:
      "Olá! Gostaria de entender qual projeto solar (On-Grid, Off-Grid ou Bombeamento) faz sentido para o meu imóvel com a RP Soluções.",
    simulatorUrl: "/simulador/",
    regionCovered: "Sanclerlândia, Oeste Goiano e todo o estado de Goiás",
    instagram: "https://www.instagram.com/rpsolucoesinteligentes/",
    technicalLead: "Raul Prado Nunes",
    rating: "4.8",
  },

  partnerBrands: [
    {
      id: "apsystems",
      name: "APsystems",
      category: "Microinversores Globais MLPE",
      logoSrc: "/images/parceiros/parceiro-apsystems.jpg",
    },
    {
      id: "osda",
      name: "Osda Solar",
      category: "Módulos Fotovoltaicos Tier 1",
      logoSrc: "/images/parceiros/parceiro-osda-solar.jpg",
    },
    {
      id: "sunova",
      name: "Sunova Solar",
      category: "Módulos Fotovoltaicos Tier 1",
      logoSrc: "/images/parceiros/parceiro-sunova.jpg",
    },
    {
      id: "growatt",
      name: "Growatt",
      category: "Inversores Residenciais e Comerciais",
      logoSrc: "/images/parceiros/parceiro-growatt.png",
    },
    {
      id: "deye",
      name: "Deye",
      category: "Inversores Híbridos & Baterias LiFePO4",
      logoSrc: "/images/parceiros/parceiro-deye.jpg",
    },
    {
      id: "equatorial",
      name: "Equatorial Goiás",
      category: "Concessionária Homologadora",
      logoSrc: "/images/parceiros/concessionaria-equatorial.svg",
    },
    {
      id: "bv",
      name: "Meu Financiamento Solar (Banco BV)",
      category: "Financiamento em até 120x",
      logoSrc: "/images/parceiros/financiamento-meufinanciamento-bv.png",
    },
    {
      id: "bb",
      name: "Banco do Brasil",
      category: "BB Solar & Crédito Rural FCO",
      logoSrc: "/images/parceiros/financiamento-banco-do-brasil.png",
    },
    {
      id: "caixa",
      name: "Caixa Econômica Federal",
      category: "Caixa Solar & Habitação",
      logoSrc: "/images/parceiros/financiamento-caixa.png",
    },
    {
      id: "santander",
      name: "Santander Solar",
      category: "Sem Entrada com Carência",
      logoSrc: "/images/parceiros/financiamento-santander.png",
    },
    {
      id: "sicredi",
      name: "Sicredi",
      category: "Crédito Cooperativo Solar",
      logoSrc: "/images/parceiros/financiamento-sicredi.png",
    },
    {
      id: "sicoob",
      name: "Sicoob",
      category: "Linhas de Cooperativismo Solar",
      logoSrc: "/images/parceiros/financiamento-sicoob.png",
    },
    {
      id: "solfacil",
      name: "Solfácil",
      category: "Fintech Especialista em Solar",
      logoSrc: "/images/parceiros/financiamento-solfacil.png",
    },
  ] as PartnerBrand[],

  howItWorks: {
    badge: "Como Funciona",
    title: "Do estudo de viabilidade ao sistema conectado, cada etapa com rigor técnico.",
    subtitle:
      "Nossa equipe assume 100% da responsabilidade: visita técnica, projeto de engenharia com ART, homologação burocrática junto à Equatorial Goiás e instalação qualificada. Estimativa de tempo total:",
    highlightDuration: "30 a 60 dias",
    buttonText: "Simular minha economia",
  },

  howItWorksSteps: [
    {
      number: "01",
      title: "Diagnóstico Energético",
      duration: "1 a 2 dias",
      description:
        "Análise minuciosa do histórico de faturas elétricas dos últimos 12 meses, irradiação solar de Sanclerlândia/região, integridade estrutural e índice de sombreamento.",
    },
    {
      number: "02",
      title: "Engenharia & Dimensionamento ART",
      duration: "3 a 5 dias",
      description:
        "Dimensionamento elétrico preciso, especificação técnica dos módulos Tier 1 e inversores homologados, e emissão de Anotação de Responsabilidade Técnica (ART) no CREA-GO.",
    },
    {
      number: "03",
      title: "Parecer de Acesso Equatorial Goiás",
      duration: "até 15 dias",
      description:
        "Protocolo completo da documentação técnica e solicitação do Parecer de Acesso junto à concessionária Equatorial Energia Goiás, gerenciando prazos e normas da ANEEL.",
    },
    {
      number: "04",
      title: "Instalação Técnica Especializada",
      duration: "1 a 3 dias",
      description:
        "Fixação mecânica das estruturas, instalação dos painéis, quadros de proteção CC/CA e inversores por eletricistas capacitados e certificados em NR-10 e NR-35.",
    },
    {
      number: "05",
      title: "Vistoria & Troca de Medidor",
      duration: "até 7 dias",
      description:
        "Acompanhamento presencial da inspeção técnica da distribuidora e substituição do relógio de luz convencional pelo medidor bidirecional homologado.",
    },
    {
      number: "06",
      title: "Sistema Ativo & Monitoramento Inteligente",
      duration: "no mesmo dia",
      description:
        "Conexão do inversor ao Wi-Fi, liberação de acesso ao aplicativo de monitoramento em tempo real e início imediato de até 95% de economia na fatura de luz.",
    },
  ] as StepItem[],

  services: [
    {
      id: "bombeamento-solar",
      number: "01",
      title: "Bombeamento Solar para Agronegócio & Represas",
      category: "Diferencial Chave • Rural & Represas",
      description:
        "Mova água de rios, represas e poços artesianos até caixas d'água e bebedouros de pasto sem gastar um centavo com combustível fóssil ou energia elétrica da rede. O sistema liga automaticamente com a luz do sol.",
      features: [
        "Zero gasto contínuo com diesel ou óleo lubrificante",
        "Acionamento 100% autônomo com a luz do sol diária",
        "Ideal para pastagens distantes e bebedouros de gado",
        "Equipamento de alta durabilidade com manutenção nula",
      ],
      image: "/images/projetos/bombeamento-solar-represa.jpg",
      badge: "Diferencial Chave",
      startingPrice: "Economia 100% em Diesel",
      rating: "5.0",
    },
    {
      id: "offgrid-baterias",
      number: "02",
      title: "Sistemas Off-Grid com Baterias de Lítio",
      category: "Autonomia Total & Backup 24h",
      description:
        "Tenha energia elétrica estável 24 horas por dia, 7 dias por semana, mesmo em locais totalmente isolados da rede da concessionária. Equipado com bancos de baterias de Lítio (LiFePO4) e inversores híbridos inteligentes.",
      features: [
        "Autonomia completa para retiros de fazendas e sedes isoladas",
        "Baterias de Lítio LiFePO4 com vida útil superior a 10 anos",
        "Backup no-break instantâneo que evita interrupções",
        "Inversores híbridos homologados Deye e Growatt",
      ],
      image: "/images/projetos/usina-solo-agro.jpg",
      badge: "Autonomia Total",
      startingPrice: "Projetos Sob Medida",
      rating: "5.0",
    },
    {
      id: "residencial",
      number: "03",
      title: "Energia Solar Residencial",
      category: "Casas e Condomínios Fechados",
      description:
        "Gere sua própria energia limpa em casa e reduza até 95% do valor da sua fatura de luz. Use ar-condicionado em todos os cômodos com tranquilidade enquanto valoriza seu imóvel de 10% a 15% imediatamente.",
      features: [
        "Economia mensal de até 95% na conta da Equatorial Goiás",
        "Valorização patrimonial imediata no imóvel",
        "Instalação rápida e limpa em 1 a 2 dias",
        "Monitoramento em tempo real na tela do celular",
      ],
      image: "/images/projetos/residencial-telhado.jpg",
      badge: "Mais Procurado",
      startingPrice: "Financiamento em até 120x",
      rating: "5.0",
    },
    {
      id: "comercial",
      number: "04",
      title: "Energia Solar Comercial & Varejo",
      category: "Supermercados, Postos e Lojas",
      description:
        "Elimine o peso das contas de luz no fluxo de caixa da sua empresa. Solução sob medida para comércios com alta carga contínua (câmaras frias, freezers, iluminação e climatização), garantindo previsibilidade de custos.",
      features: [
        "Redução substancial de despesas operacionais fixas",
        "Payback acelerado médio entre 3 e 5 anos",
        "Parcelas pagas pelo próprio valor economizado",
        "Selo de sustentabilidade corporativa e conformidade ESG",
      ],
      image: "/images/projetos/usina-solo-destaque.png",
      badge: "ROI Acelerado",
      startingPrice: "Carência de até 120 dias",
      rating: "5.0",
    },
    {
      id: "usinas-solo-agro",
      number: "05",
      title: "Usinas Solares em Solo & Agropecuária",
      category: "Fazendas, Barracões e Ordenhas",
      description:
        "Autonomia e estabilidade para a produção no campo. Projetos para barracões de máquinas, galpões de confinamento, resfriadores de leite e pivôs de irrigação, imunes às constantes oscilações da rede elétrica rural.",
      features: [
        "Operação contínua para motores de ordenha e confinamento",
        "Suporte técnico em linhas de crédito Pronaf, Pronamp e FCO Rural",
        "Estruturas reforçadas em solo galvanizado",
        "Redução drástica dos custos de produção agropecuária",
      ],
      image: "/images/projetos/usina-solo-agro.jpg",
      badge: "Crédito Rural FCO/Pronaf",
      startingPrice: "Linhas FCO / Pronaf",
      rating: "5.0",
    },
  ] as ServiceItem[],

  testimonials: [
    {
      id: "marcos-fazenda-santa-maria",
      name: "Marcos Antônio Oliveira",
      role: "Produtor Rural",
      company: "Fazenda Santa Maria",
      city: "Sanclerlândia - GO",
      avatar: "/images/avatar-guilherme.jpg",
      installationImage: "/images/projetos/bombeamento-solar-represa.jpg",
      rating: 5.0,
      highlight: "Bombeamento Solar em Represa",
      quote:
        "O bombeamento solar instalado pela RP Soluções na nossa represa resolveu definitivamente o problema da água para os bebedouros do gado. Antes nós dependíamos de motor a diesel, que dava manutenção toda semana e gastava muito combustível. Hoje a bomba começa a rodar cedo com o sol e abastece tudo no automático. Equipe nota 10 do Raul Prado, atendimento honesto e muito prestativo.",
      stats: {
        label: "Economia mensal em diesel",
        value: "R$ 3.850/mês",
      },
    },
    {
      id: "divino-supermercado-central",
      name: "Divino Pereira da Silva",
      role: "Comércio Varejista",
      company: "Supermercado Central",
      city: "Sanclerlândia - GO",
      avatar: "/images/avatar-carlos.jpg",
      installationImage: "/images/projetos/usina-solo-destaque.png",
      rating: 5.0,
      highlight: "64 módulos fotovoltaicos",
      quote:
        "Quem tem mercado sabe que a conta de luz com câmaras frias e balcões de congelados é um sufoco todo mês. A RP Soluções fez todo o projeto, cuidou da homologação junto à Equatorial e instalou tudo sem atrapalhar nosso atendimento na loja. Minha conta foi para a taxa mínima. O investimento já está praticamente se pagando sozinho.",
      stats: {
        label: "Redução na conta",
        value: "R$ 4.200/mês",
      },
    },
    {
      id: "camila-residencial-slmb",
      name: "Dra. Camila Rezende",
      role: "Residencial Sobrado",
      company: "16 módulos com microinversores",
      city: "São Luís de Montes Belos - GO",
      avatar: "/images/avatar-mariana.jpg",
      installationImage: "/images/projetos/residencial-telhado.jpg",
      rating: 5.0,
      highlight: "Microinversores APsystems",
      quote:
        "Optamos pelos microinversores da APsystems recomendados pela RP Soluções por questão de segurança e tecnologia. Foi a melhor decisão! A instalação no telhado ficou impecável, os cabos todos organizados e sem nenhuma bagunça na casa. Pelo aplicativo eu consigo acompanhar o que cada placa gera diariamente. Recomendo de olhos fechados.",
      stats: {
        label: "Economia mensal",
        value: "R$ 1.150/mês",
      },
    },
    {
      id: "joao-fazenda-primavera",
      name: "João Batista Ferreira",
      role: "Sede & Ordenha Mecânica",
      company: "Sistema Híbrido com Baterias",
      city: "Região de Anicuns - GO",
      avatar: "/images/avatar-roberto.jpg",
      installationImage: "/images/projetos/usina-solo-agro.jpg",
      rating: 5.0,
      highlight: "Baterias LiFePO4 Deye",
      quote:
        "Na nossa região a rede da concessionária costuma oscilar muito e já chegamos a perder ordenha por falta de energia. A RP Soluções montou um sistema híbrido com baterias de lítio da Deye. Agora, se a rede cai, a fazenda nem percebe, tudo continua ligado. Segurança total para o produtor rural.",
      stats: {
        label: "Economia mensal",
        value: "R$ 2.900/mês",
      },
    },
    {
      id: "carlos-residencial-cidade-velha",
      name: "Carlos Eduardo Guimarães",
      role: "Residencial Unifamiliar",
      company: "10 módulos Sunova Solar",
      city: "Sanclerlândia - GO",
      avatar: "/images/avatar-fabiana.jpg",
      installationImage: "/images/projetos/residencial-telhado.jpg",
      rating: 5.0,
      highlight: "Financiamento Banco do Brasil",
      quote:
        "Fizemos o financiamento 100% pelo Banco do Brasil com a ajuda da equipe da RP Soluções. Não precisamos desembolsar nada de entrada e o valor da parcela ficou mais barato do que a gente pagava na fatura da Equatorial. Hoje usamos ar-condicionado todo dia com a casa fresca e a conta zerada.",
      stats: {
        label: "Economia mensal",
        value: "R$ 780/mês",
      },
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: "Como funciona a geração de energia solar fotovoltaica?",
      answer:
        "Os painéis solares instalados no telhado ou em solo absorvem a radiação solar e geram eletricidade em corrente contínua (CC). O inversor solar ou microinversor converte essa eletricidade em corrente alternada (CA), que é o padrão utilizado em todas as tomadas, aparelhos e iluminação. A energia gerada abastece o imóvel imediatamente. Se houver excesso de geração, essa energia é injetada na rede da concessionária Equatorial Goiás, gerando créditos solares válidos por até 60 meses.",
      category: "Técnico",
    },
    {
      question: "O que significa a entrega no modelo Turn-Key (chave na mão)?",
      answer:
        "Significa que você não precisa se preocupar com nenhuma etapa técnica ou burocrática. A RP Soluções cuida de 100% do processo: visita técnica e dimensionamento, projeto de engenharia com emissão de ART no CREA-GO, protocolo e aprovação na Equatorial Goiás, fornecimento de equipamentos certificados Tier 1, instalação com eletricistas certificados em NR-10/NR-35, vistoria técnica e liberação do relógio bidirecional.",
      category: "Serviços",
    },
    {
      question: "Qual é o percentual real de economia na conta de energia?",
      answer:
        "Em sistemas On-Grid (conectados à rede), a economia chega a até 95% do valor da sua fatura mensal. O consumidor passa a pagar apenas o custo de disponibilidade obrigatório da rede da Equatorial Goiás (taxa mínima) e a iluminação pública. Em sistemas rurais com bombeamento solar, a economia com óleo diesel e geradores atinge 100%.",
      category: "Financeiro",
    },
    {
      question: "É necessário dar entrada para financiar a instalação?",
      answer:
        "Não! A RP Soluções possui parcerias homologadas com instituições como Meu Financiamento Solar (BV), Banco do Brasil, Caixa Econômica, Sicoob, Sicredi, Solfácil e Santander. É possível financiar 100% do projeto em até 120 meses com carência de até 120 dias para começar a pagar. Na maioria dos casos, o valor economizado na conta de luz já paga a parcela mensal.",
      category: "Financeiro",
    },
    {
      question: "O que acontece com a geração em dias nublados, chuvosos ou durante a noite?",
      answer:
        "Mesmo em dias nublados ou chuvosos, os painéis continuam produzindo eletricidade através da radiação solar difusa, em proporção à luminosidade do dia. Durante a noite, o imóvel utiliza automaticamente a energia da concessionária consumindo os créditos gerados durante o dia. Em sistemas Off-Grid, o banco de baterias de lítio LiFePO4 garante energia contínua 24h por dia.",
      category: "Técnico",
    },
    {
      question: "Como funciona o sistema de bombeamento solar em fazendas e represas?",
      answer:
        "O bombeamento solar utiliza módulos fotovoltaicos conectados a um inversor/driver especial acoplado a motobombas de água em poços artesianos, represas ou lagos. O sistema opera de forma 100% autônoma com a luz solar, sem necessidade de operador humano, sem cabeamento extenso e eliminando por completo os gastos com geradores a diesel e manutenção mecânica semanal.",
      category: "Rural",
    },
    {
      question: "Quais são as garantias dos módulos e inversores?",
      answer:
        "Nossos módulos fotovoltaicos Tier 1 (Osda Solar e Sunova Solar) possuem 25 anos de garantia de eficiência linear de geração e 10 a 15 anos contra defeitos de fabricação. Os inversores e microinversores parceiros (APsystems, Growatt e Deye) contam com garantias de 10 a 15 anos, além da garantia de montagem e suporte técnico direto da RP Soluções.",
      category: "Garantia",
    },
    {
      question: "Quanto tempo leva entre fechar o projeto e o sistema estar funcionando?",
      answer:
        "A instalação física dos painéis e equipamentos no local costuma levar entre 1 e 3 dias úteis. O processo completo de engenharia — que compreende vistoria técnica, elaboração dos projetos elétricos com ART, protocolo e parecer de acesso na Equatorial Goiás, vistoria da concessionária e troca do medidor — leva em média de 30 a 60 dias corridos, totalmente conduzidos pela RP Soluções.",
      category: "Instalação",
    },
  ] as FAQItem[],
};
