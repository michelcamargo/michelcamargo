import { DefaultFooter } from "@/components/FooterTemplate";
import { DefaultHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import useDatahooks from "@/hooks/useDatahooks";

import Styled from './styles';

const DefaultLayout = ({ children }) => {
  const { dataHooks, isDataHooksLoading, dataHooksError } = useDatahooks();
  
  if (dataHooksError) {
    return (
      <div>error {JSON.stringify(dataHooksError)}</div>
    );
  }
  
  if (isDataHooksLoading) {
    return (
      <LoadingFeedback />
    );
  }
  
  return (
    <Styled.PageLayout>
      <DefaultHeader dataHooks={dataHooks.header} />
      <Styled.BodyContainer>
        <Styled.BodyContent>{children}</Styled.BodyContent>
      </Styled.BodyContainer>
      <DefaultFooter />
    </Styled.PageLayout>
  );
};

export default DefaultLayout;
