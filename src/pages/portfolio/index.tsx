import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import PortfolioPage from "@/domains/PortfolioPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchPortfolioContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('portfolio-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da PORTFOLIO-PAGE >> ${error}`);
  }
};

const fetchAboutContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('about-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da ABOUT-PAGE >> ${error}`);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const [portfolioPageData, aboutAuthorData] = await Promise.all([
    fetchPortfolioContent('pt-BR'),
    fetchAboutContent('pt-BR'),
  ]);
  
  if (!portfolioPageData || !aboutAuthorData) return { props: {} };
  
  const serverViewData = {
    metadata: portfolioPageData.metadata,
    content: {
      sessions: [
        ...portfolioPageData.content.sessions,
        ...aboutAuthorData.content.sessions,
      ],
    }
  };
  
  return {
    props: { serverViewData }
  };
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default PortfolioPage;
