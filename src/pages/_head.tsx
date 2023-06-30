import Head from "next/head";

const DEFAULT_TITLE = 'Michel Camargo - Portfolio';
const DEFAULT_DESCRIPTION = 'Estudos e desenvolvimento';

interface Props {
  title?: string,
  description?: string,
  isProd?: boolean,
}

const CustomPageHead = ({ title, description, isProd }: Props) => {
  
  return (
    <Head>
      <title>{title ?? DEFAULT_TITLE}</title>
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="content-language" content="pt-br" />
      { isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" /> }
    </Head>
  );
};

export default CustomPageHead;
