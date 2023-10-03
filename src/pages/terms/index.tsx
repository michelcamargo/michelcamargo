import { ReactElement } from "react";

import Layout from "@/components/layout";
import PrivacyTermsPage from "../../domains/TermsPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchPrivacyConditionTerms = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('privacy-terms-page', language);
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
  return (
    <Layout.Common>
      {page}
    </Layout.Common>
  );
};

export default PrivacyTermsPage;
