import React, {useCallback, useMemo, useState} from "react";

import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
// import PortfolioCarousel from "@/components/PortfolioCarousel";
import SocialPresentation from "@/components/SocialPresentation";
// import TaskApp from "@/context/TaskApp";
import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import PortfolioComponent from "@/components/Portfolio";
import BriefPresentation from "@/components/BriefPresentation";
import ContactForm from "@/components/ContactForm";
import CareerSkills from "@/components/CareerSkills";

interface Props {
  serverViewData: ServerViewProps,
}

const HomePage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  const portfolio = useMemo(() =>
    viewSessions.find(item => item.key === 'portfolio')?.getChildren(), [viewSessions]);
  
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
  
  return (
    <Styled.PageWrapper topSpacing={0} rowGap={42}>
      <Styled.SessionContainer topSpacing={0} rowGap={16}>
        <HeroComponent data={viewSessions.find(session => session.key === 'hero')} />
        <SocialPresentation socialData={viewSessions.find(session => session.key === 'socialLinks')} />
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <CareerSkills />
      </Styled.SessionContainer>
      <Styled.SessionContainer>
        <PortfolioComponent data={portfolio} />
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
