import React from "react";

import AppProviders from "@/components/AppProviders";
import CookiesPopup from "@/components/CookiesPopup";
import CustomAppRootHTML from "@/components/CustomAppRootHTML";
import { AppPropsWithLayout } from "@/lib/layout";
import { Lexend } from 'next/font/google';
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import CustomToastContainer from "@/components/Toast/CustomToastContainer";

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
    <AppProviders pageProps={pageProps} availableFonts={fonts}>
      <CustomAppRootHTML availableFonts={fonts} />
      <CustomToastContainer />
      {/* eslint-disable-next-line react/no-unknown-property */}
      { getLayout(<Component {...rest}>{children}</Component>) }
      <CookiesPopup />
    </AppProviders>
  );
};

export default App;
