import { ReactNode } from "react";

import { AppPropsWithLayout } from "@/lib/layout";
import muiTheme from "@/styles/themes";
import { ThemeProvider } from '@mui/material/styles';
import { NextDataHooksProvider } from 'next-data-hooks';

interface Props {
  children: ReactNode,
  pageProps: AppPropsWithLayout,
}

const AppProviders = ({
  children,
  pageProps,
}: Props) => {
  const { ...pageData } = pageProps;
  
  return (
    <NextDataHooksProvider {...pageData}>
      <ThemeProvider theme={muiTheme(true)}>
        {children}
      </ThemeProvider>
    </NextDataHooksProvider>
  );
};

export default AppProviders;
