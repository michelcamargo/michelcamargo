import { useCallback, useState } from "react";

import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import View from "@/components/View";
import CustomContent from "@/helpers/custom-content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { PageHead, ServerViewProps } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/lib/layout";

interface Props {
  serverViewData: ServerViewProps,
}

const HomePage: NextPageWithLayout = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<PageHead>(null);
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
    <View path={'/'} title={viewHead.title} description={viewHead.description}>
      <div className={'page_wrapper'}>
        <div className={'page_content'}>
          <HeroComponent data={viewSessions.find(session => session.key === 'hero')} />
          <div className={'Carrousel'}>
            {/*<PortfolioCarousel items={portfolioData} />*/}
          </div>
        </div>
      </div>
    </View>
  );
};

export default HomePage;
