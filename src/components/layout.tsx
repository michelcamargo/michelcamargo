import {ReactNode, useMemo, useRef} from "react";

import { DEFAULT_HEIGHT_FOOTER, DefaultFooter } from "@/components/FooterTemplate";
import { DEFAULT_HEIGHT_HEADER, DefaultHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import useDataHooks from "@/hooks/useDataHooks";
import useDynamicContentHeight from "@/hooks/useDynamicContentHeight";
import { ServerViewProps } from "@/lib/datahooks";

import Styled from './styles';
import { useRouter } from "next/router";

interface Props {
  children: ReactNode,
  serverProps?: ServerViewProps,
  bypassServerContent?: boolean,
}

const Common = ({ children, serverProps, bypassServerContent = false }: Props) => {
  const { dataHooks, isDataHooksLoading, dataHooksError } = useDataHooks();
  const { footerRef, contentRef } = useDynamicContentHeight();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return useMemo(() => {
    if (isDataHooksLoading) return <LoadingFeedback />
    
    if (dataHooksError) {
      router.push('/unavailable');
    }
    
    if (!bypassServerContent && !serverProps) {
      return <LoadingFeedback />;
    }
    
    return (
      <Styled.PageLayout>
        <DefaultHeader dataHooks={dataHooks.header} ref={headerRef} bypassServerContent={bypassServerContent} />
        <Styled.Body ref={contentRef}>{children}</Styled.Body>
        <DefaultFooter dataHooks={dataHooks.footer} ref={footerRef} bypassServerContent={bypassServerContent} />
      </Styled.PageLayout>
    )
  }, [router.pathname, isDataHooksLoading, dataHooksError, bypassServerContent, serverProps]);
};

const Minimal = ({ children }: Props) => {
  const { contentRef } = useDynamicContentHeight();
  
  return (
    <Styled.PageLayout>
      <Styled.Body ref={contentRef}>{children}</Styled.Body>
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
