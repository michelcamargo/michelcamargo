export type HeaderProps = {
  logo?: string
  navigation?: [
    {
      label?: string
      icon?: string
      link?: string
      highlighted?: boolean
    }
  ];
}

export type FooterMenu = {
  title?: string
  items?: [
    {
      label?: string
      icon?: string
      link?: string
      external?: boolean
    }
  ];
}
