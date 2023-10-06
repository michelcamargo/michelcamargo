import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import AppView from "@/components/View";
import CustomContent from "@/helpers/custom-content";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { PageHead, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const AboutPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<PageHead | null>(null);
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewTitle, viewSubtitle, viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    
    setViewHead({ title: viewTitle, description: viewSubtitle });
    setViewSessions(sessions);
    
    console.log('body.sessions', sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  return (
    <AppView path={'/about'} title={viewHead.title} description={viewHead.description}>
      <Styled.PageWrapper>
        <Styled.PageContainer>
          <Styled.PageContent>
            {JSON.stringify(viewSessions)}
          </Styled.PageContent>
        </Styled.PageContainer>
      </Styled.PageWrapper>
    </AppView>
  );
};

export default AboutPage;

