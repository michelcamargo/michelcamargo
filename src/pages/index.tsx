import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import HomePage from "@/domains/HomePage";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  
  const pageMeta = {
    path: '/',
    title: 'Início - Michel Camargo',
    description: 'Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
  }
  
  try {
    return {
      props: {
        serverViewData: {
          metadata: pageMeta,
          content: {
            sessions: await ContentService.fetchByKeys(['bio/bio', 'work/devstack'], locale ?? defaultLocale) ?? [],
          },
        },
        locale,
      }
    };
    
  } catch (error) {
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default HomePage;
