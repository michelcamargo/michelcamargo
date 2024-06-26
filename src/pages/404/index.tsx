
import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import NotFoundPage from "@/domains/NotFoundPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";
import { handleServerRequestError} from "@/helpers/error";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const locale = contextLocale || defaultLocale;
  
  const pageMeta = {
    path: '/404',
    title: 'Página não encontrada',
    description: 'Oops, a página não foi encontrada',
    ignoreTitlePostfix: false,
    keywords: '404,not-found,freelancer,work,dev',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['general/fallback'], locale) ?? [];

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
    handleServerRequestError(error, context);
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

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default NotFoundPage;
