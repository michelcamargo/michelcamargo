import STATIC_HERO_CONTENT from '@/static-data/hero-content';
import STATIC_PORTFOLIO_CONTENT from '@/static-data/portfolio';
import STATIC_SOCIAL_LINKS from '@/static-data/social-links';

const STATIC_HOME_CONTENT = {
  head: {
    title: 'Michel Camargo - Web developer & UIUX design',
    description: 'Estudos e portfolio',
  },
  body: {
    sessions: [
      {
        key: 'hero',
        children: STATIC_HERO_CONTENT,
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
