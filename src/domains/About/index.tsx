import { PageData } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/lib/layout";
import CustomPageHead from "@/pages/_head";

import Styled from './styles';

interface Props {
  pageContent: PageData,
}

const AboutPage: NextPageWithLayout = ({ pageContent }: Props) => {
  const { head } = pageContent;
  
  return (
    <>
      <CustomPageHead title={head.title} description={head.description}/>
      <Styled.PageWrapper>
        <Styled.PageContainer>
          <Styled.PageContent>
            {/*{JSON.stringify(sessionHero.content)}*/}
          </Styled.PageContent>
        </Styled.PageContainer>
      </Styled.PageWrapper>
    </>
  );
};

export default AboutPage;

