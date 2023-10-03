import { STATIC_PORTFOLIO_CONTENT, STATIC_DEVSTACK_CONTENT } from '@/static-data/portfolio';
import STATIC_SOCIAL_LINKS from '@/static-data/social-links';

export const STATIC_HOME_CONTENT = {
  head: {
    title: 'Trabalho e portifólio',
    description: 'Entre em contato',
  },
  body: {
    sessions: [
      {
        key: 'stack',
        children: STATIC_DEVSTACK_CONTENT,
      },
      {
        key: 'portfolio',
        children: STATIC_PORTFOLIO_CONTENT,
      },
      {
        key: 'socialLinks',
        children: STATIC_SOCIAL_LINKS,
      }
    ]
  },
};

export default STATIC_HOME_CONTENT;
