import staticAboutContent from '@/domains/AboutPage/static';
import staticHomeContent from '@/domains/HomePage/static';
import { ServerViewProps } from "@/lib/datahooks";

const staticPageData: { [keyName: string]: ServerViewProps } = {
  'home-page': staticHomeContent,
  'about-page': staticAboutContent,
};

export default staticPageData;
