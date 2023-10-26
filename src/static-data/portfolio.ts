import villaMercatoBrandLogo from '@/assets/branding/villa-mercato/logo-color.png';
import { CustomContentType } from "@/lib/content";

export const STATIC_PORTFOLIO_CONTENT: Array<CustomContentType> = [
  {
    key: 'portfolio-villa-mercato',
    children: [
      {
        key: 'case-images',
        children: [
          {
            key: 'cover-img-src',
            content: ''
          },
          {
            key: 'common-img-src',
            content: ''
          }
        ]
      },
      {
        key: 'case-brand',
        children: [
          {
            key: 'case-brand-logo',
            content: villaMercatoBrandLogo.src,
          },
          {
            key: 'case-brand-name',
            content: 'Villa Mercato'
          },
        ]
      },
      {
        key: 'case-title',
        content: 'Aplicação WEB e Mobile para supermercado'
      },
      {
        key: 'case-description',
        content: 'VTEX e React Native'
      },
    ],
  },
  {
    key: 'portfolio-bebrasil',
    children: [
      {
        key: 'case-images',
        children: [
          {
            key: 'cover-img-src',
            content: ''
          },
          {
            key: 'common-img-src',
            content: ''
          }
        ]
      },
      {
        key: 'case-brand',
        children: [
          {
            key: 'case-brand-logo',
            content: ''
          },
          {
            key: 'case-brand-name',
            content: 'BeBrasil'
          },
        ]
      },
      {
        key: 'case-title',
        content: 'Aplicação WEB e PWA'
      },
      {
        key: 'case-description',
        content: 'VTEX e Angular.JS'
      },
    ],
  },
];

export const STATIC_DEVSTACK_CONTENT: Array<CustomContentType> = [
  {
    key: 'frontend',
    children: [
      {
        key: 'react',
        children: [
          {
            key: 'label',
            content: 'React / Next.JS'
          },
          {
            key: 'stack-img',
            content: '#'
          }
        ]
      },
      {
        key: 'typescript',
        children: [
          {
            key: 'label',
            content: 'Typescript'
          },
          {
            key: 'stack-img',
            content: '#'
          }
        ]
      },
      {
        key: 'react',
        children: [
          {
            key: 'label',
            content: 'React / Next.JS'
          },
          {
            key: 'stack-img',
            content: '#'
          }
        ]
      },
    ],
  },
];

