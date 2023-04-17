import { PageData } from "@/lib/page";

const staticContent: PageData = {
  head: {
    title: 'Michel Camargo - Web developer & UIUX design',
    description: 'Um pouco mais sobre mim',
  },
  body: {
    sessions: [
      {
        key: 'hero',
        content: [
          {
            key: 'a',
            content: 'ABC'
          }
        ]
    
      }
    ]
  },
}

export default staticContent;