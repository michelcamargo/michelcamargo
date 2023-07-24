import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

export type CustomNextPage<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, minimal?: boolean) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: CustomNextPage,
}
