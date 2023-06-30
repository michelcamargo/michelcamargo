import { DefaultHeader } from "@/components/HeaderComponent";
import LoadingFeedback from "@/components/LoadingFeedback";
import useDatahooks from "@/hooks/useDatahooks";

import Styled from './styles';

export default function Layout({ children }) {
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
    </Styled.PageLayout>
  );
}
