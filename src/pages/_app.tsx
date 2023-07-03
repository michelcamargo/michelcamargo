import AppProviders from "@/components/AppProviders";
import CookiesPopup from "@/components/CookiesPopup";
import CustomAppRootHTML from "@/components/CustomAppRootHTML";
import { NavbarHeightContextProvider } from "@/components/HeaderTemplate/HeaderNavbar/NavbarHeightContext";
import NextConfig from '@/configs/next.env';
import { AppPropsWithLayout } from "@/lib/layout";
import CustomPageHead from "@/pages/_head";
import { Lexend } from 'next/font/google';
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";

const isProd = NextConfig.ENV === 'production';

const lexend = Lexend({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { children, ...rest } = pageProps;
  
  const getLayout = Component.getLayout ?? (page => page);
  
  const fonts = [
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
    <AppProviders pageProps={pageProps}>
      <CustomPageHead title="Michel Camargo" isProd={isProd} />
      <ToastContainer
        theme="colored"
        hideProgressBar
        position="top-center"
      />
      <NavbarHeightContextProvider>
        <CustomAppRootHTML availableFonts={fonts} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        {getLayout(<Component {...rest}>{children}</Component>)}
      </NavbarHeightContextProvider>
      <CookiesPopup />
    </AppProviders>
  );
};

export default App;
