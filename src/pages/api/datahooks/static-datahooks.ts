import { HeaderData } from "@/lib/datahooks";

const headerStaticData: HeaderData = {
  navigationItems: [
    {
      key: 'about',
      label: 'Sobre',
      href: '/about',
      items: [],
    },
    {
      key: 'portfolio',
      label: 'Trabalho',
      href: '/portfolio',
      items: [],
    },
  ],
  headerDisclaimer: undefined
};

export default {
  header: headerStaticData
};
