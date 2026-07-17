export const site = {
  name: 'Amuy Menezes Advocacia',
  shortName: 'Amuy Menezes',
  tagline: 'Proteger seu direito é garantir seu amanhã.',
  description:
    'Escritório em Goiânia/GO especializado em Direito Securitário e Previdenciário: aposentadorias, benefícios do INSS, seguros e indenizações. Agende sua reunião.',
  url: 'https://www.amuymenezes.com.br',
  phone: {
    label: '(62) 98467-1617',
    href: 'tel:+5562984671617',
  },
  email: 'contato@amuymenezes.com.br',
  oab: 'Dra. Dalyla Amuy — OAB/GO nº 60.407',
  oabUrl: 'https://gproc.oabgo.org.br/pgs/consultamembroconselho.aspx',
  social: {
    instagram: 'https://www.instagram.com/amuymenezesadv',
    facebook: 'https://www.facebook.com/amuymenezesadv',
    youtube: 'https://www.youtube.com/@amuymenezesadv',
  },
  addresses: [
    {
      label: 'Goiânia/GO',
      text: 'Avenida T4, 619 — Sala 310, Setor Bueno',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Avenida+T4+619+Sala+310+Setor+Bueno+Goi%C3%A2nia+GO',
    },
    {
      label: 'Inhumas/GO',
      text: 'Residencial Portal de Inhumas II, Rua 02, Qd. 06, Lt. 13 S/N',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Residencial+Portal+de+Inhumas+II+Rua+02+Inhumas+GO',
    },
  ],
} as const;

const WHATSAPP_NUMBER = '5562984671617';

/** Gera o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  default:
    'Olá! Vim pelo site da Amuy Menezes Advocacia e gostaria de agendar uma reunião.',
  acidente:
    'Olá! Sofri um acidente e gostaria de tirar dúvidas sobre meus direitos. Vim pelo site.',
  aposentadoria:
    'Olá! Quero me aposentar e gostaria de tirar dúvidas. Vim pelo site.',
  previdenciario:
    'Olá! Preciso de orientação em Direito Previdenciário (INSS, aposentadorias e benefícios). Vim pelo site.',
  securitario:
    'Olá! Preciso de orientação em Direito Securitário (seguros e indenizações). Vim pelo site.',
  outro: 'Olá! Gostaria de falar com um especialista sobre outro assunto. Vim pelo site.',
} as const;

export const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;

export const heroSlides = [
  {
    image: '/images/slide1.jpg',
    kicker: 'Seguro DPVAT · Indenizações',
    titleStart: 'Sofreu um',
    titleScript: 'acidente?',
    text: 'Você pode ter direito a indenizações que a seguradora não conta. Nossa equipe luta por cada centavo que é seu por lei.',
    ctaLabel: 'Tire suas Dúvidas',
    ctaMessage: whatsappMessages.acidente,
  },
  {
    image: '/images/slide2.jpg',
    kicker: 'Direito Previdenciário · INSS',
    titleStart: 'Deseja se',
    titleScript: 'aposentar?',
    text: 'Planejamento previdenciário completo para conquistar o melhor benefício possível — sem perder tempo nem dinheiro.',
    ctaLabel: 'Tire suas Dúvidas',
    ctaMessage: whatsappMessages.aposentadoria,
  },
  {
    image: '/images/slide3.jpg',
    kicker: 'Securitário & Previdenciário',
    titleStart: 'Advogados',
    titleScript: 'especialistas',
    text: 'Rigor técnico e visão estratégica para garantir a proteção que você e sua família tanto precisam.',
    ctaLabel: 'Fale Conosco',
    ctaMessage: whatsappMessages.default,
  },
] as const;

export const tickerItems = [
  'Direito Previdenciário',
  'Direito Securitário',
  'Aposentadorias',
  'Seguro DPVAT',
  'Pensões',
  'Auxílios INSS',
  'Revisão de Benefícios',
  'Indenizações',
] as const;

export const features = [
  {
    number: '01',
    title: 'Agende sua Reunião',
    text: 'Atendimento exclusivo e sem compromisso: conte seu caso diretamente pelo WhatsApp e receba orientação inicial.',
    linkLabel: 'Agendar agora',
    message: whatsappMessages.default,
  },
  {
    number: '02',
    title: 'Ajuíze sua Causa',
    text: 'Analisamos documentos, coberturas e negativas para construir a estratégia mais segura para o seu caso.',
    linkLabel: 'Enviar meu caso',
    message: whatsappMessages.default,
  },
  {
    number: '03',
    title: 'Minimize seu Risco',
    text: 'Atuação preventiva e contenciosa para proteger seus benefícios, indenizações e o futuro da sua família.',
    linkLabel: 'Falar com especialista',
    message: whatsappMessages.default,
  },
] as const;

export const practiceAreas = [
  {
    id: 'previdenciario',
    label: 'Direito Previdenciário',
    message: whatsappMessages.previdenciario,
    groups: [
      {
        title: 'Aposentadorias',
        items: [
          'Por Tempo de Contribuição',
          'Por Idade',
          'Por Invalidez',
          'Especial',
        ],
      },
      {
        title: 'Auxílios',
        items: [
          'Auxílio-Acidente',
          'Auxílio-Doença',
          'Auxílio-Reclusão',
          'Auxílio-Maternidade',
        ],
      },
      {
        title: 'Pensões',
        items: ['Por Morte', 'Por Invalidez'],
      },
      {
        title: 'Outras Demandas',
        items: ['Revisão de Benefícios', 'Planejamento Previdenciário'],
      },
    ],
  },
  {
    id: 'securitario',
    label: 'Direito Securitário',
    message: whatsappMessages.securitario,
    groups: [
      {
        title: 'Áreas de Atuação',
        items: [
          'Seguro de Vida',
          'Seguro Residencial',
          'Seguro de Transportes',
          'Seguro de Automóvel',
          'Seguro RCF',
          'Seguro Viagem',
          'Seguro Saúde',
        ],
      },
      {
        title: 'Ações Desenvolvidas',
        items: [
          'Cobrança de indenizações ante as seguradoras',
          'Análise de coberturas contratadas',
          'Impugnações face às negativas administrativas',
          'Orientação na contratação de apólices',
          'Pareceres sobre questões securitárias',
          'Representação em litígios judiciais',
          'Acompanhamento de processos de sinistros',
        ],
      },
    ],
  },
] as const;

export const aboutValues = [
  'Liderança Visionária',
  'Comunicação Clara',
  'Ética no Trabalho',
  'Foco no Resultado',
] as const;

export const skills = [
  { label: 'Comprometimento', value: 100 },
  { label: 'Eficiência', value: 100 },
  { label: 'Qualificação', value: 100 },
] as const;

export const testimonials = [
  {
    name: 'Júnior',
    initial: 'J',
    role: 'Cliente que recebeu Seguro DPVAT — Itauçu/GO',
    text: 'Após sofrer um acidente de trânsito e fraturar o braço, o Júnior, da cidade de Itauçu/GO, procurou nossa equipe para receber toda a ajuda necessária e garantir seus direitos indenizatórios através do Seguro DPVAT.',
    videoUrl: 'https://www.youtube.com/watch?v=wZH9-JbDnRE',
  },
  {
    name: 'Venâncio',
    initial: 'V',
    role: 'Cliente que recebeu Seguro DPVAT — Damolândia/GO',
    text: 'Venâncio mora em Damolândia/GO e, junto com sua esposa, sofreu um acidente de trânsito. Por indicação de um amigo, eles procuraram nossa equipe para obter ajuda e garantir seus direitos.',
    videoUrl: 'https://www.youtube.com/watch?v=f1hjZp6rtxY',
  },
] as const;
