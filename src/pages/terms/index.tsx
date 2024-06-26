import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";
import cookie from "cookie";
import {handleServerRequestError} from "@/helpers/error";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const pageMeta = {
    path: '/terms',
    title: 'Termos de uso e políticas de privacidade',
    description: 'Termos de uso e políticas de privacidade',
    ignoreTitlePostfix: false,
    keywords: 'terms,privacy,compliance',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['legal/policies', 'legal/compliance'], locale) ?? [];
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

PrivacyTermsPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default PrivacyTermsPage;
