import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

import PrivacyTermsPage from "../../domains/TermsPage";

const fetchPrivacyConditionTerms = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('terms-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da privacy-terms-page >> ${error}`);
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const serverViewData = await fetchPrivacyConditionTerms('pt-BR') ?? null;
  
  return {
    props: {
      serverViewData,
    }
  };
};

PrivacyTermsPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView target={page} />;
};

export default PrivacyTermsPage;
