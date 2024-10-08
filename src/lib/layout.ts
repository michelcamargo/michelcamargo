/* eslint-disable no-unused-vars */
import { ReactElement, ReactNode } from "react";

import { CommonPageProps } from "@/lib/datahooks";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type CustomNextPage<P = NonNullable<CommonPageProps>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, minimal?: boolean) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: CustomNextPage,
}

export enum ViewLayoutEnum {
  DEFAULT = 'default',
  MINIMAL = 'minimal',
}
