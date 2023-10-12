import { ReactNode, useRef } from "react";

import { DefaultFooter, DEFAULT_HEIGHT_FOOTER } from "@/components/FooterTemplate";
import { DefaultHeader, DEFAULT_HEIGHT_HEADER } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import useDataHooks from "@/hooks/useDataHooks";
import useDynamicContentHeight from "@/hooks/useDynamicContentHeight";
import { ServerViewProps } from "@/lib/datahooks";

import Styled from './styles';

interface Props {
  children: ReactNode,
  serverProps?: ServerViewProps,
  bypassServerContent?: boolean,
}

const Common = ({ children, serverProps, bypassServerContent }: Props) => {
  const { dataHooks, isDataHooksLoading, dataHooksError } = useDataHooks();
  const { footerRef, contentRef } = useDynamicContentHeight();
  const headerRef = useRef<HTMLDivElement | null>(null);
  
  if (dataHooksError) {
    return (
      <div>error {JSON.stringify(dataHooksError)}</div>
    );
  }
  
  if (isDataHooksLoading) {
    return (
      <LoadingFeedback />
    );
  }
  
  if (!bypassServerContent && !serverProps) {
    return (
      <LoadingFeedback />
    );
  }
  
  return (
    <Styled.PageLayout>
      <DefaultHeader dataHooks={dataHooks.header} ref={headerRef} />
      <Styled.Body ref={contentRef}>{children}</Styled.Body>
      <DefaultFooter dataHooks={dataHooks.footer} ref={footerRef} />
    </Styled.PageLayout>
  );
};

const Minimal = ({ children, serverProps }: Props) => {
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
