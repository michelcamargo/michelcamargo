import { ReactElement } from "react";

import { MetaConfig, AppConfig } from "@/configs";
import HeadMetadata from "@/pages/_head";

interface Props {
  children: ReactElement,
  path: string,
  title: string,
  ignorePrefix?: boolean,
  description?: string,
  keywords?: string,
}

const View = ({
  title,
  ignorePrefix,
  description,
  keywords,
  path,
  children,
}: Props) => {
  
  return (
    <>
      <HeadMetadata
        currentURL={`${AppConfig.APP_URL}${path}`}
        title={ignorePrefix ? title : `${MetaConfig.VIEW_NAME} | ${title}`}
        description={description ?? MetaConfig.VIEW_DESCRIPTION}
        keywords={keywords ?? MetaConfig.VIEW_KEYWORDS}
        isProd={AppConfig.ENV === 'production'}
      />
      {children}
    </>
  );
};

export default View;
