import { ReactElement } from "react";

import HydratedView from "@/components/HydratedView";
import AuthPage from "@/domains/AuthPage";
import { ViewLayoutEnum } from "@/lib/layout";
import ContentService from "@/services/content.service";
import { GetStaticPropsContext } from "next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {}
  };
};

AuthPage.getLayout = function getLayout(page: ReactElement) {
  return <HydratedView viewElement={page} layout={ViewLayoutEnum.MINIMAL} />;
};

export default AuthPage;
