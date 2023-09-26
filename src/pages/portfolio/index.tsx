import { ReactElement } from "react";

import Layout from "@/components/layout";
import PortfolioPage from "@/domains/PortfolioPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchAboutContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('portfolio-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da PORTFOLIO-PAGE >> ${error}`);
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const serverViewData = await fetchAboutContent('pt-BR') ?? null;
  
  return {
    props: {
      serverViewData,
    }
  };
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout.Common>
      {page}
    </Layout.Common>
  );
};

export default PortfolioPage;
