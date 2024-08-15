import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";
import cookie from "cookie";
import {handleServerRequestError} from "@/helpers/error";
import PagePropsHelper from "@/helpers/SSR.helper";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, locale: contextLocale, defaultLocale = 'ptBR' } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const locale = cookies?.locale ? decodeURIComponent(cookies.locale) : (contextLocale || defaultLocale);
  
  const meta = {
    path: '/terms',
    title: 'Termos de uso e políticas de privacidade',
    description: 'Termos de uso e políticas de privacidade',
    ignoreTitlePostfix: false,
    keywords: 'terms,privacy,compliance',
    locale,
  }
  
  try {
    return PagePropsHelper.handleServerProps(meta, context, {
      sessions: await ContentService.SSRFetchByKeys(['legal/policies', 'legal/compliance'], locale)
    })
  } catch (error) {
    handleServerRequestError(error, context);
    return PagePropsHelper.handleStaticProps(meta, context);
  }
};

PrivacyTermsPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} />;
};

export default PrivacyTermsPage;
