import { FooterData, HeaderData } from "@/lib/datahooks";

const headerStaticData: HeaderData = {
  navigationItems: [
    // {
    //   key: 'about',
    //   label: 'Sobre',
    //   href: '/about',
    //   items: [],
    // },
    {
      key: 'portfolio',
      label: 'Trabalho',
      href: '/portfolio',
      items: [],
    },
  ],
  headerDisclaimer: undefined
};

const footerStaticData: FooterData = {
  menuItems: [
    {
      key: 'admin',
      label: 'Administrativo',
      href: '/admin',
    },
    {
      key: 'link-tree',
      label: 'Árvore de links',
      href: '/links',
    },
  ],
  partners: [],
  disclaimer: [
    'Aplicação de cunho apresentativo sem fins lucrativos',
    'Todos os direitos reservados - 2024',
  ]
};

export default {
  header: headerStaticData,
  footer: footerStaticData,
};
