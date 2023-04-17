type HeaderNavItem = {
  key: string,
  label: string,
  href: string,
  items: Array<HeaderNavItem>,
}

export type HeaderData = {
  logo: {
    url: string,
  },
  navigation: {
    items: Array<HeaderNavItem>
  }
}