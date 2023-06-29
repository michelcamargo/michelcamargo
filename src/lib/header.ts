export type HeaderNavItem = {
  key: string,
  label: string,
  href: string,
  items: Array<HeaderNavItem>,
}

export type HeaderData = {
  navigationItems: Array<HeaderNavItem>,
}
