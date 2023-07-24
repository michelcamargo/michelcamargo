import LoadingFeedback from "@/components/LoadingFeedback";
import { ServerViewProps } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/lib/layout";
// import CustomPageHead from "@/pages/_head";

import Styled from './styles';

interface Props {
  pageContent: ServerViewProps,
}

const AboutPage: NextPageWithLayout = ({ pageContent }: Props) => {
  const { body } = pageContent;
  
  if (!pageContent) return <p>NO CONTENT</p>;
  if (!body) return <LoadingFeedback />;
  
  return (
    <>
      {/*<CustomPageHead title={head.title} description={head.description}/>*/}
      <Styled.PageWrapper>
        <Styled.PageContainer>
          <Styled.PageContent>
            {'PÁGINA SOBRE'}
          </Styled.PageContent>
        </Styled.PageContainer>
      </Styled.PageWrapper>
    </>
  );
};

export default AboutPage;

