import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}
