import React, { useMemo } from "react";

import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import BriefPresentation from "@/components/BriefPresentation";
import ContactForm from "../../components/CustomForms/Contact";
import CareerSkills from "@/components/CareerSkills";

interface Props {
  locale: string,
  serverViewData: ServerViewProps,
}

const HomePage: CustomNextPage<Props> = ({ locale, serverViewData }: Props) => {
  const { sessions, bio, portfolio } = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);

    const bio = _sessions.find(item => item.key === 'bio');
    const portfolio = _sessions.find(item => item.key === 'portfolio');
    return {
      sessions: _sessions,
      bio: bio?.toObject() ?? null,
      portfolio: portfolio?.toObject() ?? null
    };
  }, [serverViewData])
  
  console.log('serverViewData', serverViewData)
  
  // if (!sessions) return <LoadingFeedback />;
  
  // console.log('bio', bio);
  // console.log('sessions', sessions[0].getChild('author'));
  
  return (
    <Styled.PageWrapper topSpacing={0} rowGap={42}>
      <Styled.SessionContainer topSpacing={0} rowGap={16}>
        {/*<HeroComponent data={bio} />*/}
        {/*<SocialPresentation socialData={viewSessions.find(session => session.key === 'socialLinks')} />*/}
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <CareerSkills />
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        {/*<PortfolioComponent data={portfolio} />*/}
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <Styled.Intro>
          <BriefPresentation />
          <ContactForm
            title={'Formulário'}
            description={'Identifique-se e envie uma mensagem\nSerá um prazer conhecê-lo!'}
          />
        </Styled.Intro>
      </Styled.SessionContainer>
    </Styled.PageWrapper>
  );
};

export default HomePage;
