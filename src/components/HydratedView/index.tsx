import React, { ReactElement } from 'react';

import ViewTemplateError from "@/components/HydratedView/ViewTemplateError";
import Layout from "@/components/layout";
import { AppConfig, MetaConfig } from "@/configs";
import { ViewLayoutEnum } from "@/lib/layout";
import HeadMetadata from "@/pages/_head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import CustomToastContainer from "@/components/Toast/CustomToastContainer";

interface Props {
  viewElement: ReactElement,
  layout?: ViewLayoutEnum,
  bypassServerContent?: boolean,
}

const HydratedView = ({ viewElement, layout, bypassServerContent }: Props) => {
  const router = useRouter();
  const RenderLayout = layout === ViewLayoutEnum.MINIMAL ? Layout.Minimal : Layout.Common;
  const serverData = viewElement.props.serverViewData;
  
  if (!viewElement) {
    return <ViewTemplateError code={'A-0'} message={'Teste erro template'} />;
  }
  
  if (bypassServerContent || !viewElement.props.serverViewData) {
    return (
      <>
        <HeadMetadata
          currentURL={`${AppConfig.APP_URL}${router.pathname}`}
          title={`${router.pathname.replace('/', '')} | ${MetaConfig.VIEW_NAME}`}
          description={MetaConfig.VIEW_DESCRIPTION}
          keywords={MetaConfig.VIEW_KEYWORDS}
          isProd={AppConfig.ENV === 'production'}
        />
        <RenderLayout bypassServerContent>
          <ToastContainer
            theme="colored"
            hideProgressBar
            position="top-center"
          />
          {viewElement}
        </RenderLayout>
      </>
    );
  }
  
  const { metadata } = serverData;
  
  return (
    <>
      <HeadMetadata
        currentURL={`${AppConfig.APP_URL}${metadata.path}`}
        title={metadata.ignoreTitlePostfix ? metadata.title : `${metadata.title} | ${MetaConfig.VIEW_NAME}`}
        description={metadata.description ?? MetaConfig.VIEW_DESCRIPTION}
        keywords={metadata.keywords ?? MetaConfig.VIEW_KEYWORDS}
        isProd={AppConfig.ENV === 'production'}
      />
      <RenderLayout serverProps={serverData} bypassServerContent={bypassServerContent ?? false}>
        {viewElement}
      </RenderLayout>
    </>
  );
};

export default HydratedView;
