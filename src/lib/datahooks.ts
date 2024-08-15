import CustomContent from "@/helpers/content.helper";
import { CustomBannerData } from "@/lib/content";

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

export type CommonPageProps<T = object> = {
  // eslint-disable-next-line no-unused-vars
  [P in keyof T]: object
} & {
  meta: PageMetadata,
  data?: PageData<T>,
};

export type PageData<T = object> = {
  // eslint-disable-next-line no-unused-vars
  [P in keyof T]: object
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
