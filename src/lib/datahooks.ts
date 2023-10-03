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

export type CustomNavItem = {
  key: string,
  label: string,
  href: string,
  items: Array<CustomNavItem>,
}

export type HeaderData = {
  navigationItems: Array<CustomNavItem>,
  headerDisclaimer?: CustomBannerData,
}

export type FooterData = {
  menuItems?: Array<CustomNavItem>,
  partners?: Array<CustomContent>,
  disclaimer?: CustomContent,
}
