export type CustomContent = {
  _id: number,
  title: string,
  groupName: string,
  link?: string,
  isExternal: boolean,
  text?: string,
  imgSrc?: string,
  imgSrcMobile?: string
}

export type Asset = {
  _id?: number,
  src: string,
  srcMobile?: string,
  link?: string,
  isExternal?: boolean,
  title: string
}
