import { HeaderData } from "@/lib/datahooks";

const headerStaticData: HeaderData = {
  navigationItems: [
    {
      key: 'about',
      label: 'Sobre',
      href: '/about',
      items: [],
    },
  ],
  headerDisclaimer: {
    text: 'Chamada de atenção persistente no topo da página'
  }
};

export default {
  header: headerStaticData
};
