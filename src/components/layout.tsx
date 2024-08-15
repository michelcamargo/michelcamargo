import React, { ReactElement, useMemo, useRef } from "react";

import { DEFAULT_HEIGHT_FOOTER, DefaultFooter } from "@/components/FooterTemplate";
import { DEFAULT_HEIGHT_HEADER, DefaultHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import HydrationHelper from '@/helpers/hydration';
import useDataHooks from "@/hooks/useDataHooks";
import useDynamicContentHeight from "@/hooks/useDynamicContentHeight";
import { CommonPageProps } from "@/lib/datahooks";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import Styled from './styles';

interface Props {
  children: ReactElement,
  hydratedProps?: CommonPageProps,
  bypassServerContent?: boolean,
}

const Common = ({ children, hydratedProps, bypassServerContent = false }: Props) => {
  const { dataHooks, isDataHooksLoading, dataHooksError } = useDataHooks();
  const { footerRef, contentRef } = useDynamicContentHeight();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  
  return useMemo(() => {
    if (isDataHooksLoading) return <LoadingFeedback />;
    if (dataHooksError) router.push('/unavailable');
    if ((!bypassServerContent && !hydratedProps) || !children) return <LoadingFeedback />;
    
    return (
      <Styled.PageLayout>
        <ToastContainer
          theme="colored"
          hideProgressBar
          position="top-center"
        />
        <DefaultHeader dataHooks={dataHooks.header} ref={headerRef} bypassServerContent={bypassServerContent} />
        <Styled.Body ref={contentRef}>
          {HydrationHelper.getHydratedPageElement(children, hydratedProps)}
        </Styled.Body>
        <DefaultFooter dataHooks={dataHooks.footer} ref={footerRef} bypassServerContent={bypassServerContent} />
      </Styled.PageLayout>
    );
  }, [router.pathname, isDataHooksLoading, dataHooksError, bypassServerContent, hydratedProps]);
};

const Minimal = ({ children, hydratedProps }: Props) => {
  const { contentRef } = useDynamicContentHeight();
  
  return (
    <Styled.PageLayout>
      <ToastContainer
        theme="colored"
        hideProgressBar
        position="top-center"
      />
      <Styled.Body ref={contentRef}>
        {HydrationHelper.getHydratedPageElement(children, hydratedProps)}
      </Styled.Body>
    </Styled.PageLayout>
  );
};

export {
  DEFAULT_HEIGHT_HEADER,
  DEFAULT_HEIGHT_FOOTER
};

export default {
  Common,
  Minimal,
};
