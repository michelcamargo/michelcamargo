import { ServerViewProps } from "@/lib/datahooks";
import STATIC_SOCIAL_LINKS from '@/static-data/social-links';

export default {
  head: {
    title: 'Sobre mim',
    description: 'Conheça meu trabalho',
  },
  body: {
    sessions: [
      {
        key: 'social',
        children: [
          {
            key: 'socialLinks',
            children: STATIC_SOCIAL_LINKS,
          }
        ]
    
      }
    ]
  },
} as ServerViewProps;
