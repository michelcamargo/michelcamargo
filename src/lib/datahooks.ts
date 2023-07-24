import CustomContent from "@/helpers/custom-content";
import { CustomBannerData, CustomContentType } from "@/lib/custom-content";

export type PageHead = {
  title: string,
  description: string
}

export type ServerViewProps = {
  head: PageHead,
  body: {
    sessions: Array<CustomContentType>
  }
};

export type ViewData = {
  head: PageHead,
  body: {
    sessions: Array<CustomContent>
  }
};

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
