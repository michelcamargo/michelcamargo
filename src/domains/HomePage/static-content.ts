import { PageData } from "@/lib/datahooks";

const staticContent: PageData = {
  head: {
    title: 'Michel Camargo - Web developer & UIUX design',
    description: 'Estudos e portfolio',
  },
  body: {
    sessions: [
      {
        key: 'hero',
        content: [
          {
            key: 'heading',
            content: [
              {
                key: 'firstname',
                content: 'Michel'
              },
              {
                key: 'middlename',
                content: 'de Souza'
              },
              {
                key: 'lastname',
                content: 'Camargo'
              }
            ]
          },
          {
            key: 'subHeading',
            content: 'Developer & UIUX Designer'
          }
        ]
    
      }
    ]
  },
};

export default staticContent;
