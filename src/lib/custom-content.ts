export type CustomContentType = {
  key: string,
  content?: string,
  children?: Array<CustomContentType>,
}

export type CustomBannerData = {
  heading?: string,
  text?: string,
  href?: string,
  image?: string,
  background?: string,
}
