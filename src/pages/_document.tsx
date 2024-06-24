import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ptBR">
      {/* @ts-ignore */}
      <Head />
      <body>
        <Main />
        {/* @ts-ignore */}
        <NextScript />
      </body>
    </Html>
  );
}
