import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AboutPage from "@/domains/AboutPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchAboutContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('about-page', language);
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
  return <HydratedView viewElement={page} />;
};

export default AboutPage;
