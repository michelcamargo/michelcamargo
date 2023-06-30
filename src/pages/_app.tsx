// eslint-disable-next-line import/no-cycle
import AppProviders from "@/components/AppProviders";
import NextConfig from '@/configs/next.env';
import {NavbarHeightContextProvider} from "@/components/NavbarHeightContext";
import {ToastContainer} from "react-toastify";
import CookiesPopup from "@/components/CookiesPopup";
import CustomPageHead from "@/pages/_head";
import {AppProps} from "next/app";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";

const isProd = NextConfig.ENV === 'production';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  
  return (
    <AppProviders>
      <CustomPageHead title="Michel Camargo - Portfolio" isProd={isProd} />
      <ToastContainer
        theme="colored"
        hideProgressBar
        position="top-center"
      />
      <NavbarHeightContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </NavbarHeightContextProvider>
      <CookiesPopup />
    </AppProviders>
  );
};

export default App;
