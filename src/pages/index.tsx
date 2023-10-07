import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
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
  return <HydratedView viewElement={page} />;
};

export default HomePage;
