import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/custom-content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const LinkTreePage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewSessions, setViewSessions] = useState<Array<CustomContent>>([]);
  
  const hydratePage = useCallback(() => {
    const { viewSessions: sessions } = Hydration.parseViewProps(serverViewData);
    
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
      <Styled.MainColumn>
        {viewSessions.map((item, index) => (
          <Styled.LinkRow key={index}>
            <Styled.LinkContent>
              {/*<Styled.LinkIcon />*/}
              <Styled.LinkLabel>
                {'Conteúdo do link'}
              </Styled.LinkLabel>
            </Styled.LinkContent>
          </Styled.LinkRow>
        ))}
      </Styled.MainColumn>
    </Styled.PageWrapper>
  );
};

export default LinkTreePage;
