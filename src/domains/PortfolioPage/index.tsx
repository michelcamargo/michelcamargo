import React, { useCallback, useState } from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/custom-content";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { ViewMetadata, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from "./styles";

interface Props {
  serverViewData: ServerViewProps,
}

const PortfolioPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<Partial<ViewMetadata> | null>(null);
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewTitle, viewSubtitle, viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    
    setViewHead({ title: viewTitle, description: viewSubtitle });
    setViewSessions(sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <Styled.PageContent>
        {viewHead?.title && <DefaultViewHeading title={viewHead.title} subtitle={viewHead.description} />}
        {JSON.stringify(viewSessions)}
      </Styled.PageContent>
    </Styled.PageWrapper>
  );
};

export default PortfolioPage;
