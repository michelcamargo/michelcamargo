import React, { ReactElement } from 'react';

import ViewTemplateError from "@/components/HydratedView/ViewTemplateError";
import Layout from "@/components/layout";
import AppConfig from "@/config/next.config";
import { ViewLayoutEnum } from "@/lib/layout";
import HeadMetadata from "@/pages/_head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

interface Props {
  viewElement: ReactElement,
  layout?: ViewLayoutEnum,
  bypassServerContent?: boolean,
}

const HydratedView = ({ viewElement, layout, bypassServerContent }: Props) => {
  const router = useRouter();
  const RenderLayout = layout === ViewLayoutEnum.MINIMAL ? Layout.Minimal : Layout.Common;
  
  const { serverViewData, locale } = viewElement.props;
  
  if (!viewElement) {
    return <ViewTemplateError code={'A-0'} message={'Teste erro template'} />;
  }
  
  if (bypassServerContent || !serverViewData) {
    return (
      <>
        <HeadMetadata
          currentURL={`${AppConfig.appUrl}${router.pathname}`}
          title={`${router.pathname.replace('/', '')} | ${'teste'}`}
          description={'view description'}
          keywords={'view keywords'}
          isProd={AppConfig.environment === 'production'}
          locale={locale}
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
  
  const { metadata } = serverViewData;
  
  return (
    <>
      <HeadMetadata
        currentURL={`${AppConfig.appUrl}${metadata.path}`}
        title={metadata.ignoreTitlePostfix ? metadata.title : `${metadata.title} | ${'view name'}`}
        description={metadata.description ?? 'view description'}
        keywords={metadata.keywords ?? 'view keywords'}
        isProd={AppConfig.environment === 'production'}
        locale={locale}
      />
      <RenderLayout serverProps={serverViewData} bypassServerContent={bypassServerContent ?? false}>
        {viewElement}
      </RenderLayout>
    </>
  );
};

export default HydratedView;
