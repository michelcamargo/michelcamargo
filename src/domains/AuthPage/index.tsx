import { useCallback, useState } from "react";

import AppLink from "@/components/AppLink";
import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const AuthPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewSessions: sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    
    setViewSessions(sessions);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewSessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <MinimalHeader />
      <Styled.Content>
        <Styled.MainColumn>
          <div>autenticacao</div>
        </Styled.MainColumn>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};

export default AuthPage;
