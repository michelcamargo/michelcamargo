export type CustomContent = {
  key: string,
  content: string | Array<CustomContent> | null
}

export type CustomBannerData = {
  heading?: string,
  text?: string,
  href?: string,
  image?: string,
  background?: string,
}
