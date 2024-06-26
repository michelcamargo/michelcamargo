import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import HomePage from "@/domains/HomePage";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext, } from "next";
import cookie from "cookie";
import {handleServerRequestError} from "@/helpers/error";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
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
            sessions: await ContentService.fetchByKeys(['bio/bio', 'work/devstack'], locale) ?? [],
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default HomePage;
