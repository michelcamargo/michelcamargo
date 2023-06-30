import { ReactElement, ReactNode } from "react";

import AppProviders from "@/components/AppProviders";
import CookiesPopup from "@/components/CookiesPopup";
import CustomAppRootHTML from "@/components/CustomAppRootHTML";
import { NavbarHeightContextProvider } from "@/components/NavbarHeightContext";
import NextConfig from '@/configs/next.env';
import CustomPageHead from "@/pages/_head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Lexend } from 'next/font/google';
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";

const isProd = NextConfig.ENV === 'production';

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const lexend = Lexend({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  
  const availableFonts = [
    {
      id: 'lead',
      font: lexend,
    },
    {
      id: 'highlight',
      font: lexend,
    }
  ];
  
  return (
    <AppProviders>
      <CustomPageHead title="Michel Camargo - Portfolio" isProd={isProd} />
      <ToastContainer
        theme="colored"
        hideProgressBar
        position="top-center"
      />
      <NavbarHeightContextProvider>
        <CustomAppRootHTML availableFonts={availableFonts} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        {getLayout(<Component {...pageProps} />)}
      </NavbarHeightContextProvider>
      <CookiesPopup />
    </AppProviders>
  );
};

export default App;
