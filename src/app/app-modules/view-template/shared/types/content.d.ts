export type CustomContent = {
  _id?: number,
  groupName: string,
  link: string,
  isExternal: boolean,
  label: string,
  imgSrc: string,
  imgSrcMobile: string
}

export type Asset = {
  _id?: number,
  src: string,
  srcMobile?: string,
  link?: string,
  isExternal?: boolean,
  title: string
}
