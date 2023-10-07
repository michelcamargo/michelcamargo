import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/custom-content";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const AboutPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    setViewSessions(sessions);
    
    console.log('page sessions', sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewSessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <Styled.PageContainer>
        <Styled.PageContent>
          {JSON.stringify(viewSessions)}
        </Styled.PageContent>
      </Styled.PageContainer>
    </Styled.PageWrapper>
  );
};

export default AboutPage;

