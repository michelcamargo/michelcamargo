import { ReactElement } from "react";

import DefaultLayout from "@/components/layout";
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
  const pageContent = await fetchHomepageContent('pt-BR');
  
  if (!pageContent) {
    return {
      props: {
        pageContent: null
      }
    };
  }
  
  return {
    props: {
      pageContent,
    }
  };
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  );
};

export default HomePage;
