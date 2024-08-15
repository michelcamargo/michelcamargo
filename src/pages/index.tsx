import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import HomePage from "@/domains/HomePage";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, } from "next";
import cookie from "cookie";
import { handleServerRequestError } from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const meta = {
    path: '/',
    title: 'Início - Michel Camargo',
    description: 'Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,bio,developer,freelancer,work,dev,tech',
    locale,
  }
  
  try {
    return PagePropsHelper.handleServerProps(meta, context, {
      sessions: await ContentService.SSRFetchByKeys(['bio/bio', 'work/devstack'], locale),
    })
  } catch (error) {
    handleServerRequestError(error, context);
    return PagePropsHelper.handleStaticProps(meta, context);
  }
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default HomePage;
