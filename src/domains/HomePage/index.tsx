import React, { useMemo } from "react";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import BriefPresentation from "@/components/BriefPresentation";
import ContactForm from "../../components/CustomForms/Contact";
import CareerSkills from "@/components/CareerSkills";
import LoadingFeedback from "@/components/LoadingFeedback";
import HeroComponent from "@/components/HeroComponent";
import SocialPresentation from "@/components/SocialPresentation";
// import PortfolioComponent from "@/components/Portfolio";

const HomePage: CustomNextPage = ({ data }) => {
  const sessions = useMemo(() => data?.sessions, [data]);
  
  const { bio, socialLinks} = useMemo(() => {
    return {
      bio: sessions?.get?.('bio'),
      socialLinks: sessions?.get?.('social'),
      portfolio: sessions?.get?.('devstack')
    }
  }, [data?.sessions]);
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper topSpacing={0} rowGap={42}>
      <Styled.SessionContainer topSpacing={0} rowGap={16}>
        <HeroComponent data={bio} />
        <SocialPresentation socialData={socialLinks} />
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <Styled.Intro>
          <BriefPresentation />
        </Styled.Intro>
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        {/*<PortfolioComponent data={portfolio} />*/}
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <CareerSkills />
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <ContactForm
          title={'Formulário'}
          description={'Identifique-se e envie uma mensagem\nSerá um prazer conhecê-lo!'}
        />
      </Styled.SessionContainer>
    </Styled.PageWrapper>
  );
};

export default HomePage;
