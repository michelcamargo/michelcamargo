import { Html, Main, NextScript } from 'next/document';
import Head from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{background: 'black'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
