import { ReactElement } from "react";

import Layout from "@/components/layout";
import AboutPage from "@/domains/AboutPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchAboutContent = async (language?: string) => {
  try {
    const response = await ContentService.fetchByKey('about-page', language);
    
    return response.json();
  } catch(error) {
    throw new Error(`Falha ao buscar informações da ABOUT-PAGE >> ${error}`);
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

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout.Common>
      {page}
    </Layout.Common>
  );
};

export default AboutPage;
