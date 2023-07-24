import STATIC_SOCIAL_LINKS from '@/static-data/social-links';

const STATIC_ABOUT_CONTENT = {
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
};

export default STATIC_ABOUT_CONTENT;
