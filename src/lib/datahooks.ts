import CustomContent from "@/helpers/custom-content";
import { CustomBannerData, CustomContentType } from "@/lib/custom-content";

export type ViewMetadata = {
  path: string,
  title: string,
  description?: string,
  ignoreTitlePostfix?: boolean,
  keywords?: string,
}

export type ServerViewProps = {
  metadata: ViewMetadata,
  content: {
    sessions: Array<CustomContentType>
  }
};

export type ViewData = {
  head: ViewMetadata,
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
  partners?: Array<string>,
  disclaimer?: Array<string>,
}
