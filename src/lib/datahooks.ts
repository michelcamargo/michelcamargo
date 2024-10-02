import CustomContent from "@/helpers/content.helper";
import { CustomBannerData, CustomContentType } from "@/lib/content";
import { LanguageType } from "@/lib/locale";

export type PageMetadata = {
  path: string,
  title: string,
  description: string,
  ignoreTitlePostfix?: boolean,
  keywords: string,
  locale: LanguageType,
}

export type ServerViewProps<T = CustomContentType> = {
  meta: PageMetadata,
  content: {
    sessions: T | null
  }
};

export type PageData<T = CustomContent> = {
  sessions?: T,
};

export type CommonPageProps<T = CustomContent> = {
  meta: PageMetadata,
  data: PageData<T> | null,
};

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
