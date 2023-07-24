import { CustomContentType } from "@/lib/custom-content";

const PORTFOLIO_STATIC_CONTENT: Array<CustomContentType> = [
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
            content: ''
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

export default PORTFOLIO_STATIC_CONTENT;
