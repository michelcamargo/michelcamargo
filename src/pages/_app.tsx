// eslint-disable-next-line import/no-cycle
import AppProviders from "@/components/AppProviders";
import NextConfig from '@/configs/next.env';
import {NavbarHeightContextProvider} from "@/components/NavbarHeightContext";
import {ToastContainer} from "react-toastify";
import GrantCookiesPopup from "@/components/GrantCookiesPopup";
import CustomPageHead from "@/pages/_head";

const isProd = NextConfig.ENV === 'production';

export default function App({ Component, pageProps }) {
  return (
    <AppProviders>
      <CustomPageHead title="Michel Camargo - Portfolio" isProd={isProd} />
      <NavbarHeightContextProvider>
        <Component {...pageProps} />
      </NavbarHeightContextProvider>
      <ToastContainer
        theme="colored"
        hideProgressBar
        position="top-center"
      />
      <GrantCookiesPopup />
    </AppProviders>
  );
}
