import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import LinkTreePage from "@/domains/LinkTreePage";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

const fetchLinkTreeContent = async (language?: string) => {
  try {
    return ContentService.fetchByKey_static('links-page', language);
  } catch(error) {
    throw new Error(`Falha ao buscar informações da LINKTREE-PAGE >> ${error}`);
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const serverViewData = await fetchLinkTreeContent('pt-BR') ?? null;
  
  return {
    props: {
      serverViewData,
    }
  };
};

LinkTreePage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default LinkTreePage;
