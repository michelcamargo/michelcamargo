import { MetaConfig, AppConfig } from "@/configs";
import HeadMetadata from "@/pages/_head";

interface Props {
  path: string,
  title: string,
  description?: string,
  keywords?: string,
}

const View = ({
  title,
  description,
  keywords,
  path,
  children,
}: Props) => {
  
  return (
    <>
      <HeadMetadata
        currentURL={`${AppConfig.APP_URL}${path}`}
        title={title}
        description={description ?? MetaConfig.VIEW_DESCRIPTION}
        keywords={keywords ?? MetaConfig.VIEW_KEYWORDS}
        isProd={AppConfig.ENV === 'production'}
      />
      {children}
    </>
  );
};

export default View;
