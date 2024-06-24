import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AuthPage from "@/domains/AuthPage";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale } = context;
  
  const pageMeta = {
    path: '/auth',
    title: 'Autenticação',
    description: 'Autenticação - PixelBay',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['general/auth'], locale ?? defaultLocale);

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
    
  } catch (error) {
    
    console.error('Falha ao buscar:', error);
    
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



AuthPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />
};

export default AuthPage;
