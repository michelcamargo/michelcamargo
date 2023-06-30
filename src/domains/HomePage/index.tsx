import {ReactElement, useCallback, useState} from "react";
import { HeaderData, PageData } from "@/lib/datahooks";
import { getCustomContentByKey } from "@/helpers/content-handler";
import CustomCarousel from "@/components/CustomCarousel";
import {Button} from "@mui/material";
import Styled from './styles';
import HeroComponent from "@/components/HeroComponent";
import useDidMount from "@/hooks/useDidMount";
import { CustomContent } from "@/lib/custom-content";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomPageHead from "@/pages/_head";
import {NextPageWithLayout} from "@/pages/_app";

interface Props {
  pageContent: PageData,
  dataHooks?: {
    header: HeaderData,
    footer?: any
  }
}

const HomePage: NextPageWithLayout = ({pageContent}: Props) => {
  const { head } = pageContent;
  const [carouselItems, setCarouselItems] = useState<Array<ReactElement>>([]);
  const [heroData, setHeroData] = useState<CustomContent[]>();
  
  const { sessions } = pageContent.body;
  
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
      {/*<DefaultHeader dataHooks={dataHooks.header} />*/}
      <main className={'page_wrapper'}>
        <div className={'page_content'}>
          <div className={'hero-section'}>
            { heroData ? <HeroComponent heroData={heroData} /> : <LoadingFeedback />}
            <div className={'Carrousel'}>
              <Styled.ActionPanel>
                <Button onClick={setItems}>PUSH</Button>
                <Button onClick={clearItems} color={'warning'}>CLEAR</Button>
              </Styled.ActionPanel>
              <CustomCarousel items={carouselItems} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
