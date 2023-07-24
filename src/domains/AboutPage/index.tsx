import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import View from "@/components/View";
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
    const { head, body } = Hydration.getViewData(serverViewData);
    
    setViewHead(head);
    setViewSessions(body.sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  return (
    <View path={'/about'} title={viewHead.title} description={viewHead.description}>
      <Styled.PageWrapper>
        <Styled.PageContainer>
          <Styled.PageContent>
            {'PÁGINA SOBRE'}
          </Styled.PageContent>
        </Styled.PageContainer>
      </Styled.PageWrapper>
    </View>
  );
};

export default AboutPage;

