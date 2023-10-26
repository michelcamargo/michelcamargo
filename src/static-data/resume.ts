import { CustomContentType } from "@/lib/content";

const STATIC_MAIN_RESUME: Array<CustomContentType> = [
  {
    key: 'about',
    children: [
      {
        key: 'heading',
        content: 'Estudante e desenvolvedor de interfaces digitais disposto a ' +
          'oferecer experiências intuitivas e agradáveis ao usuário.'
      },
      {
        key: 'sub-heading',
        content: 'Parte do meio'
      },
      {
        key: 'general',
        content: 'Desenvolvo soluções usando Javascript, Typescript, ...' +
          'integrando à interfaces React.js suportado por Node.js ou Python, ' +
          'além de explorar e aplicar conceitos e de design e prototipação de interfaces' +
          ' em colaboração com times de desenvolvimento em software-house.'
      }
    ]
  },
  {
    key: 'subHeading',
    content: 'Developer & UIUX Designer'
  },
  {
    key: 'description',
    content: 'Pleasure to ensure great experiences solving modern people problems.'
  }
];

export default STATIC_MAIN_RESUME;
