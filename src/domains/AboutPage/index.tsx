import { useMemo } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import PersonalPresentation from "@/components/PersonalPresentation";
import SocialPresentation from "@/components/SocialPresentation";
import CustomContent from "@/helpers/content";
import Hydration from "@/helpers/hydration";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const AboutPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const { sessions, socialMediaContent, aboutContent } = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    return {
      sessions: _sessions,
      socialMediaContent: _sessions.find(item => item.key === 'social') ?? null,
      aboutContent: _sessions.find(item => item.key === 'resume') ?? null,
    };
  }, [serverViewData])
  
  console.log('sessions', sessions)
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <Styled.PageContainer>
        <Styled.PageContent>
          {aboutContent ? <PersonalPresentation serverContent={aboutContent} /> : null }
          {socialMediaContent ? <SocialPresentation socialData={socialMediaContent} /> : null}
        </Styled.PageContent>
      </Styled.PageContainer>
    </Styled.PageWrapper>
  );
};

export default AboutPage;

