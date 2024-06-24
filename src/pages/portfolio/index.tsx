import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import PortfolioPage from "@/domains/PortfolioPage";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  
  const pageMeta = {
    path: '/portfolio',
    title: 'Apresentação',
    description: 'Portfolio - Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,portfolio,developer,freelancer,work,dev,tech',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['bio/bio', 'work/devstack', 'work/portfolio'], locale ?? defaultLocale);
    
    return {
      props: {
        serverViewData: {
          metadata: pageMeta,
          content: {
            sessions,
          },
        },
        locale,
      }
    };
  } catch (e) {
    return {
      props: {
        serverViewData: {
          metadata: pageMeta,
          content: {
            sessions: [],
          },
        },
        locale,
      }
    };
  }
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default PortfolioPage;
