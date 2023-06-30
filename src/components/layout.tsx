import DefaultHeader from "@/components/DefaultHeader";
import Styled from './styles';
import useDatahooks from "@/hooks/useDatahooks";
import LoadingFeedback from "@/components/LoadingFeedback";

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
      <DefaultHeader dataHooks={dataHooks.header}/>
      <main>{children}</main>
    </Styled.PageLayout>
  );
}
