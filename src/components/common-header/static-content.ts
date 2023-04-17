import { HeaderData } from "@/lib/header";

const staticContent: HeaderData = {
  logo: {
    url: '#',
  },
  navigation: {
    items: [
      {
        key: 'about',
        label: 'Sobre',
        href: '/about',
        items: [],
      }
    ]
  }
}

export default staticContent