import { PageData } from "@/lib/page";

const staticContent: PageData = {
  head: {
    title: 'Michel Camargo - Web developer & UIUX design',
    description: 'Apresentação profissional e portfolio',
  },
  body: {
    sessions: [
      {
        key: 'hero',
        content: [
          {
            key: 'heading',
            content: 'Michel Camargo'
          },
          {
            key: 'subHeading',
            content: 'Developer & UIUX Designer'
          }
        ]
    
      }
    ]
  },
}

export default staticContent;