import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import LinkTreePage from "@/domains/LinkTreePage";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import {GetServerSidePropsContext} from "next"
import cookie from 'cookie';
import { handleServerRequestError } from "@/helpers/error";


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const pageMeta = {
    path: '/links',
    title: 'Referências',
    description: 'Referências e links - Michel Camargo - web developer & UIUX designer',
    ignoreTitlePostfix: false,
    keywords: 'michelcamargo,developer,links,social,freelancer,work,dev,tech',
    locale,
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['links/links', 'links/social'], locale) ?? [];
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
    }
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



LinkTreePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default LinkTreePage;
