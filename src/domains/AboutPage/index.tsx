import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import PersonalPresentation from "@/components/PersonalPresentation";
import SocialPresentation from "@/components/SocialPresentation";
import CustomContent from "@/helpers/content";
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
    const { viewSessions: sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    setViewSessions(sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewSessions) return <LoadingFeedback />;
  
  const socialMediaContent = viewSessions.find(item => item.key === 'social');
  const aboutContent = viewSessions.find(item => item.key === 'resume');
  
  return (
    <Styled.PageWrapper>
      <Styled.PageContainer>
        <Styled.PageContent>
          <PersonalPresentation serverContent={aboutContent} />
          <SocialPresentation socialData={socialMediaContent} />
        </Styled.PageContent>
      </Styled.PageContainer>
    </Styled.PageWrapper>
  );
};

export default AboutPage;

