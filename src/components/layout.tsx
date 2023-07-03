import { ReactNode, useRef } from "react";

import { DefaultFooter, DEFAULT_HEIGHT_FOOTER } from "@/components/FooterTemplate";
import { DefaultHeader, DEFAULT_HEIGHT_HEADER } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import useDataHooks from "@/hooks/useDataHooks";
import useDynamicContentHeight from "@/hooks/useDynamicContentHeight";

import Styled from './styles';

interface Props {
  children: ReactNode,
}

const DefaultLayout = ({ children }: Props) => {
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
  
  return (
    <Styled.PageLayout>
      <DefaultHeader dataHooks={dataHooks.header} ref={headerRef} />
      <Styled.BodyContainer ref={contentRef}>
        <Styled.BodyContent>{children}</Styled.BodyContent>
      </Styled.BodyContainer>
      <DefaultFooter ref={footerRef} />
    </Styled.PageLayout>
  );
};

export {
  DEFAULT_HEIGHT_HEADER,
  DEFAULT_HEIGHT_FOOTER
};

export default DefaultLayout;
