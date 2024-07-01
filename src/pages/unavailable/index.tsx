import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
// import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

// import cookie from "cookie";
import {handleServerRequestError} from "@/helpers/error";
import UnavailablePage from "@/domains/UnavailablePage";
import {ViewLayoutEnum} from "@/lib/layout";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  // const cookies = cookie.parse(req.headers.cookie || '');
  // const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const pageMeta = {
    path: '/unavailable',
    title: 'Serviço indisponível',
    description: 'Página não disponível no momento, por favor aguarde ou solicite suporte',
    ignoreTitlePostfix: false,
    keywords: 'unavailable,error,failed,offine,unavailability,services,web',
  }
  
  try {
    return {
      props: {
        serverViewData: {
          metadata: pageMeta,
        },
        locale: locale ?? defaultLocale,
      }
    };
  } catch (error) {
    handleServerRequestError(error, context);
    
  }
};

UnavailablePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} bypassServerContent layout={ViewLayoutEnum.MINIMAL} />;
};

export default UnavailablePage;
