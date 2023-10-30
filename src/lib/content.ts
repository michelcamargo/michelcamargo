import { ReactElement } from "react";

export type ImageDimensions = {
  width?: number,
	height?: number,
}

export type CustomImageProps = ImageDimensions & {
	src: string,
	alt: string,
}

export type CustomContentType = {
  key: string,
  content?: string,
  children?: Array<CustomContentType>,
}

export type CustomIcon = {
  key: string,
  src: string,
  height: number | 16,
  width: number | 16,
  blurHeight: number | 0,
  blurWidth: number | 0,
}

export type CustomBannerData = {
  heading?: string,
  text?: string,
  href?: string,
  image?: string,
  background?: string,
}

export type PortfolioCase = {
  title: string,
  description: string,
  images: {
    cover: Array<CustomImageProps>,
    common: Array<CustomImageProps>,
  },
  branding: { logo: string, name: string, color: string },
  highlighted?: boolean,
}

export type LinkTreeItem = {
  label: string,
  link: string,
  icon?: ReactElement,
}