import { ReactElement } from "react";

import Layout from "@/components/layout";
import HomePage from "@/domains/HomePage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchHomepageContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('home-page', language);
    
  } catch(error) {
    throw new Error(`Falha ao buscar informações da HOME-PAGE >> ${error}`);
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const serverViewData = await fetchHomepageContent('pt-BR') ?? null;
  
  return {
    props: {
      serverViewData,
    }
  };
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout.Common>
      {page}
    </Layout.Common>
  );
};

export default HomePage;
