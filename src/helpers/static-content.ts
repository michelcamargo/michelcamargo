import staticAboutContent from '@/domains/AboutPage/static';
import staticHomeContent from '@/domains/HomePage/static';
import staticNotFoundContent from '@/domains/NotFoundPage/static';
import staticPortfolioContent from '@/domains/PortfolioPage/static';
import staticTermsContent from '@/domains/TermsPage/static';
import { ServerViewProps } from "@/lib/datahooks";

const staticPageData: { [keyName: string]: ServerViewProps } = {
  'home-page': staticHomeContent,
  'about-page': staticAboutContent,
  'portfolio-page': staticPortfolioContent,
  'terms-page': staticTermsContent,
  'not-found': staticNotFoundContent,
};

export default staticPageData;
