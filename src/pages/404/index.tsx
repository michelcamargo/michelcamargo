
import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import NotFoundPage from "@/domains/NotFoundPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";
import { handleServerRequestError} from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const locale = contextLocale || defaultLocale;
  
  const meta = {
    path: '/404',
    title: 'Página não encontrada',
    description: 'Oops, a página não foi encontrada',
    ignoreTitlePostfix: false,
    keywords: '404,not-found,freelancer,work,dev',
    locale,
  }
  
  try {
    return PagePropsHelper.handleStaticProps(meta, context, {
      sessions: await ContentService.SSRFetchByKeys(['general/fallback'], locale)
    })
  } catch (error) {
    handleServerRequestError(error, context);
    return PagePropsHelper.handleStaticProps(meta, context);
  }
};

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default NotFoundPage;
