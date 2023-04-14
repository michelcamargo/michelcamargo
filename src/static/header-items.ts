import {HeaderItem} from "@/lib/header-navigation";

const commonItems: Array<HeaderItem> = [
  {
    id: 0,
    label: 'Dashboard',
    href: '/dashboard',
  }
];

const highlightItems: Array<HeaderItem> = [
  {
    id: 9,
    label: 'Entrar',
    href: '/login',
  },
  {
    id: 8,
    label: 'Registrar-se',
    href: '/login',
  }
]

export default {
  commonItems,
  highlightItems,
}