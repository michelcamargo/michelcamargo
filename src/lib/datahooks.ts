import { CustomBannerData, CustomContent } from "@/lib/custom-content";

export type PageData = {
  head: {
    title: string,
    description: string
  },
  body: {
    sessions: Array<CustomContent>
  }
} | object;

export type HeaderNavItem = {
  key: string,
  label: string,
  href: string,
  items: Array<HeaderNavItem>,
}

export type HeaderData = {
  navigationItems: Array<HeaderNavItem>,
  headerDisclaimer?: CustomBannerData,
}
