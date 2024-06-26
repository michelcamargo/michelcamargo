import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import PortfolioPage from "@/domains/PortfolioPage";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";
import cookie from "cookie";
import {handleServerRequestError} from "@/helpers/error";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const pageMeta = {
    path: '/portfolio',
    title: 'Apresentação',
    description: 'Portfolio - Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,portfolio,developer,freelancer,work,dev,tech',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['bio/bio', 'work/devstack', 'work/portfolio'], locale) ?? [];
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

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default PortfolioPage;
