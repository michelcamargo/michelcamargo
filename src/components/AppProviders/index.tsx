import React, { ReactNode, useState } from "react";

import LocaleContextProvider from "@/context/locale/locale.context";
import { AppPropsWithLayout } from "@/lib/layout";
import muiTheme from "@/styles/themes";
import { ThemeProvider } from '@mui/material/styles';
import { NextDataHooksProvider } from 'next-data-hooks';
import { NextFont } from "next/dist/compiled/@next/font";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children: ReactNode,
  pageProps: AppPropsWithLayout,
  availableFonts: Array<{ id: string, font: NextFont }>
}

const AppProviders = ({
  children,
  pageProps,
  availableFonts,
}: Props) => {
  const { ...pageData } = pageProps;
  const [queryClient] = useState(() => new QueryClient());
  const [isDarkMode] = useState(false);
  
  const currentTheme = muiTheme(isDarkMode, availableFonts);
  
  return (
    <QueryClientProvider client={queryClient}>
      <NextDataHooksProvider {...pageData}>
        <ThemeProvider theme={currentTheme}>
          <LocaleContextProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </LocaleContextProvider>
        </ThemeProvider>
      </NextDataHooksProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
