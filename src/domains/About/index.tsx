import LoadingFeedback from "@/components/LoadingFeedback";
import View from "@/components/View";
import { ServerViewProps } from "@/lib/datahooks";
import { NextPageWithLayout } from "@/lib/layout";

import Styled from './styles';

interface Props {
  pageContent: ServerViewProps,
}

const AboutPage: NextPageWithLayout = ({ pageContent }: Props) => {
  const { body } = pageContent;
  
  if (!pageContent) return <p>NO CONTENT</p>;
  if (!body) return <LoadingFeedback />;
  
  return (
    <View path={} title={'Sobre mim'} ignorePrefix description={'Detalhes'}>
      <Styled.PageWrapper>
        <Styled.PageContainer>
          <Styled.PageContent>
            {'PÁGINA SOBRE'}
          </Styled.PageContent>
        </Styled.PageContainer>
      </Styled.PageWrapper>
    </View>
  );
};

export default AboutPage;

