import { useCallback, useState } from "react";

import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
// import PortfolioCarousel from "@/components/PortfolioCarousel";
import SocialPresentation from "@/components/SocialPresentation";
import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const HomePage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    
    setViewSessions(sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewSessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <HeroComponent data={viewSessions.find(session => session.key === 'hero')} />
      <SocialPresentation socialData={viewSessions.find(session => session.key === 'socialLinks')} />
    </Styled.PageWrapper>
  );
};

export default HomePage;
