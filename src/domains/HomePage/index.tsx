import { useCallback, useState } from "react";

import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import SocialPresentation from "@/components/SocialPresentation";
import View from "@/components/View";
import CustomContent from "@/helpers/custom-content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { PageHead, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

interface Props {
  serverViewData: ServerViewProps,
}

const HomePage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<PageHead | null>(null);
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { head, body } = Hydration.getViewData(serverViewData);
    
    setViewHead(head);
    setViewSessions(body.sessions);
    
    console.log('body.sessions', body.sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  return (
    <View path={'/'} title={viewHead.title} description={viewHead.description}>
      <div className={'page_wrapper'}>
        <div className={'page_content'}>
          <HeroComponent data={viewSessions.find(session => session.key === 'hero')} />
          <SocialPresentation socialData={viewSessions.find(session => session.key === 'socialLinks')} />
        </div>
      </div>
    </View>
  );
};

export default HomePage;
