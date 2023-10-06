
import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import NotFoundPage from "@/domains/NotFoundPage";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetch404Content = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('404-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da 404-PAGE >> ${error}`);
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const serverViewData = await fetch404Content('pt-BR') ?? null;
  
  return {
    props: {
      serverViewData,
    }
  };
};

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView target={page} />;
};

export default NotFoundPage;
