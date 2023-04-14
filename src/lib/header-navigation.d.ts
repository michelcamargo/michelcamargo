export type HeaderItem = {
  id: number,
  label: string,
  href?: string,
  icon?: any,
  items?: Array<HeaderSubItem>
}

export type HeaderSubItem = {
  id: number,
  label?: string,
  href?: string,
  icon?: any,
}