import { ServerViewProps } from "@/lib/datahooks";

const staticContent: ServerViewProps = {
  head: {
    title: 'Sobre mim',
    description: 'Conheça um pouco do meu trabalho',
  },
  body: {
    sessions: [
      {
        key: 'hero',
        children: [
          {
            key: 'a',
            content: 'ABC'
          }
        ]
    
      }
    ]
  },
};

export default staticContent;
