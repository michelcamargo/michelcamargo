import Head from "next/head";

interface Props {
  currentURL: string,
  title: string,
  description: string,
  keywords: string,
  isProd: boolean,
}

const HeadMetadata = ({ currentURL, title, description, keywords, isProd }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentURL} />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
  
      <meta
        name="twitter:card"
        content={title}
      />
  
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={currentURL} />
  
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
      <meta httpEquiv="content-language" content="pt-br" />
      { isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" /> }
    </Head>
  );
};

export default HeadMetadata;
