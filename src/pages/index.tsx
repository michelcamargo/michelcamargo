import { ReactElement } from "react";

import Layout from "@/components/layout";
import HomePage from "@/domains/HomePage";
import ContentService from "@/services/content.service";

const fetchHomepageContent = async (language?: string) => {
  try {
    const response = await ContentService.fetchByKey('home-page', language);
    
    return response.json();
  } catch(error) {
    console.error('@@ Falha ao buscar informações da HOME-PAGE', error);
    return null;
  }
};

export const getStaticProps = async context => {
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
