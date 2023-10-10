import { ServerViewProps } from "@/lib/datahooks";
import STATIC_MAIN_RESUME from "@/static-data/resume";
import STATIC_SOCIAL_LINKS from '@/static-data/social-links';

export default {
  metadata: {
    path: '/about',
    title: 'Sobre mim',
    description: 'Conheça meu trabalho',
  },
  content: {
    sessions: [
      {
        key: 'social',
        children: [
          {
            key: 'socialLinks',
            children: STATIC_SOCIAL_LINKS,
          }
        ]
      },
      {
        key: 'resume',
        children: STATIC_MAIN_RESUME,
      }
    ]
  },
} as ServerViewProps;
