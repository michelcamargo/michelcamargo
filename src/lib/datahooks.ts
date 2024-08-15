import CustomContent from "@/helpers/content.helper";
import {CustomBannerData, CustomContentType} from "@/lib/content";

export type PageMetadata = {
  path: string,
  title: string,
  description?: string,
  ignoreTitlePostfix?: boolean,
  keywords?: string,
  locale: string,
}

export type ServerViewProps<T = unknown> = {
  metadata: PageMetadata,
  content: {
    sessions: Array<T>
  }
};

export type CommonPageProps<T = Object> = {
  [P in keyof T]: Object
} & {
  meta: PageMetadata,
  data?: PageData<T>,
};


export type PageData<T = {}> = {
  [P in keyof T]: Object
} & {
  sessions: CustomContent,
} & T;

export type CustomNavItem = {
  key: string,
  label: string,
  href: string,
  items?: Array<CustomNavItem>,
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
