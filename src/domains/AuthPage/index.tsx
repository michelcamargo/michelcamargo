import { useMemo } from "react";

import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  locale: string,
  serverViewData: ServerViewProps,
}

const AuthPage: CustomNextPage<Props> = ({ serverViewData, locale }: Props) => {
  const sessions = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    return _sessions;
  }, [serverViewData])
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <MinimalHeader />
      <Styled.Content>
        <Styled.MainColumn>
          <h1>{sessions[0].getContent('title')}</h1>
          <h2>{sessions[0].getContent('description')}</h2>
          <div>{JSON.stringify(sessions)}</div>
        </Styled.MainColumn>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};

export default AuthPage;
