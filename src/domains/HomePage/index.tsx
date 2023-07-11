import { ReactElement, useCallback, useState } from "react";

import CustomCarousel from "@/components/CustomCarousel";
import HeroComponent from "@/components/HeroComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import { getCustomContentByKey } from "@/helpers/content-handler";
import useDidMount from "@/hooks/useDidMount";
import { CustomContent } from "@/lib/custom-content";
import { PageData } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/lib/layout";
import CustomPageHead from "@/pages/_head";
import { Button } from "@mui/material";

import Styled from './styles';

interface Props {
  pageContent: PageData,
}

const HomePage: NextPageWithLayout = ({ pageContent }: Props) => {
  const [carouselItems, setCarouselItems] = useState<Array<ReactElement>>([]);
  const [heroData, setHeroData] = useState<CustomContent[]>([]);
  
  const { head, body } = pageContent;
  const { sessions } = body;
  
  const setItems = () => {
    setCarouselItems(previous => {
      return [
        ...previous,
        (<p key={previous.length+1}>{`Slide ${previous.length + 1}`}</p>)
      ];
    });
  };
  
  const hydratePageContent = useCallback(content => {
    const sessionHero = getCustomContentByKey('hero', content);
    
    if (sessionHero && Array.isArray(sessionHero)) {
      setHeroData(sessionHero);
    }
  }, []);
  
  const clearItems = () => {
    setCarouselItems([]);
  };
  
  useDidMount(() => {
    if (sessions) {
      hydratePageContent(sessions);
    }
  });
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <>
      <CustomPageHead title={head.title} description={head.description} />
      <div className={'page_wrapper'}>
        <div className={'page_content'}>
          { heroData ? <HeroComponent heroData={heroData} /> : <LoadingFeedback />}
          <session className={'Carrousel'}>
            <Styled.ActionPanel>
              <Button onClick={setItems} variant={'outlined'}>PUSH</Button>
              <Button onClick={clearItems} color={'warning'}>POP</Button>
              <Button onClick={clearItems} variant={'contained'} color={'error'}>CLEAR</Button>
            </Styled.ActionPanel>
            <CustomCarousel items={carouselItems} />
          </session>
        </div>
      </div>
    </>
  );
};

export default HomePage;
