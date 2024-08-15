import React from "react";

import AppProviders from "@/components/AppProviders";
// import CookiesPopup from "@/components/CookiesPopup";
import CustomAppRootHTML from "@/components/CustomAppRootHTML";
import CustomToastContainer from "@/components/Toast/CustomToastContainer";
import { AppPropsWithLayout } from "@/lib/layout";
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { CustomFont } from "@/lib/fonts";

// const lexend = Lexend({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { children, ...rest } = pageProps;
  
  const getLayout = Component.getLayout ?? (page => page);
  
  const fonts: Array<CustomFont> = [
    // {
    //   id: 'lead',
    //   font: lexend,
    // },
    // {
    //   id: 'common',
    //   font: lexend,
    // }
  ];
  
  return (
    <AppProviders pageProps={pageProps} availableFonts={fonts}>
      <CustomAppRootHTML availableFonts={fonts} />
      <CustomToastContainer />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      { /** @ts-ignore-next-line **/ }
      { getLayout(<Component {...rest}>{children}</Component>) }
      {/*<CookiesPopup />*/}
    </AppProviders>
  );
};

export default App;
