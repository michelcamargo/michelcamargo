import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import ContentService from "@/services/content.service";
import { GetServerSidePropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale, defaultLocale = 'ptBR' } = context;
  
  const pageMeta = {
    path: '/terms',
    title: 'Termos de uso e políticas de privacidade',
    description: 'Termos de uso e políticas de privacidade',
    ignoreTitlePostfix: false,
    keywords: 'terms,privacy,compliance',
  }
  
  try {
    const sessions = await ContentService.fetchByKeys(['legal/policies', 'legal/compliance'], locale ?? defaultLocale);

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
