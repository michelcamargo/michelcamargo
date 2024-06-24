import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import LinkTreePage from "@/domains/LinkTreePage";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import {GetServerSidePropsContext} from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  
  const pageMeta = {
    path: '/links',
    title: 'Referências',
    description: 'Referências e links - Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,developer,links,social,freelancer,work,dev,tech',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['links/links', 'links/social'], locale ?? defaultLocale);
    
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



LinkTreePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default LinkTreePage;
