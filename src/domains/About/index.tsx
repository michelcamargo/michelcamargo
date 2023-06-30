import { PageData } from "@/lib/datahooks";
import { HeaderData } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/pages/_app";
import CustomPageHead from "@/pages/_head";

import Styled from './styles';

interface Props {
  pageContent: PageData,
  dataHooks?: {
    header: HeaderData,
    footer?: any
  }
}

const AboutPage: NextPageWithLayout = ({ pageContent }: Props) => {
  const { head } = pageContent;
  // const { sessions } = body;
  
  // const sessionHero = sessions.find(session => session.key === 'hero');
  
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

