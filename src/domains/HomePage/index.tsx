import {ReactElement, useCallback, useState} from "react";
import { PageData } from "@/lib/page";
import { HeaderData } from "@/lib/header";
import { getCustomContentByKey } from "@/helpers/content-handler";
import CustomCarousel from "@/components/CustomCarousel";
import {Button} from "@mui/material";
import Styled from './styles';
import HeroComponent from "@/components/HeroComponent";
import useDidMount from "@/hooks/useDidMount";
import { CustomContent } from "@/lib/custom-content";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomPageHead from "@/pages/_head";
import DefaultHeader from "@/components/common-header";

interface Props {
  pageContent: PageData,
  dataHooks: {
    header: HeaderData,
    footer?: any
  }
}

export default function HomePage({pageContent, dataHooks}: Props) {
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
    console.log('hidratando page', content);
    const sessionHero = getCustomContentByKey('hero', content);
    
    if (sessionHero && Array.isArray(sessionHero)) {
      setHeroData(sessionHero);
    }
  }, []);
  
  const hydrateTemplate = useCallback(templateData => {
    console.log('hydrate template', templateData);
  }, []);
  
  const clearItems = () => {
    setCarouselItems([]);
  };
  
  useDidMount(() => {
    if (sessions) {
      hydratePageContent(sessions);
    }
    
    if (dataHooks) {
      hydrateTemplate(dataHooks);
    }
  });
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <>
      <CustomPageHead title={head.title} description={head.description} />
      <DefaultHeader navigationItems={dataHooks.header.navigationItems} />
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
}
