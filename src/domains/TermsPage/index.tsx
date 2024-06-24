import React, {useCallback, useMemo, useState} from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import LoadingFeedback from "@/components/LoadingFeedback";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { SessionArticle } from "@/lib/content";
import { ViewMetadata, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import CustomContent from "@/helpers/content";

interface Props {
  serverViewData: ServerViewProps<SessionArticle>
}

const TermsPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<Partial<ViewMetadata> | null>(null);
  // const [viewSessions, setViewSessions] = useState<Array<SessionArticle>>([]);
  
  const sessions = useMemo(() => {
    return Hydration.parseViewProps<SessionArticle>(serverViewData) as unknown as Array<SessionArticle>;
  }, [serverViewData])
  
  
  //
  // const hydratePage = useCallback(() => {
  //   const {
  //     title, subtitle, sessions
  //   } = Hydration.parseViewProps<SessionArticle>(serverViewData, true);
  //
  //   setViewHead({ title, description: subtitle });
  //   setViewSessions(sessions as Array<SessionArticle>);
  // }, [serverViewData]);
  
  if (!viewHead || !sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      {viewHead?.title && <DefaultViewHeading title={viewHead.title} subtitle={viewHead.description} />}
      <Styled.TermsList>
        { sessions.map((item, index) => {
          const { heading, body } = item;
          
          return (
            <Styled.ListItem key={index}>
              <Styled.ListItemContent>
                <Styled.ListItemHeading>
                  {heading}
                </Styled.ListItemHeading>
                <Styled.ListItemDescription>
                  {body}
                </Styled.ListItemDescription>
              </Styled.ListItemContent>
            </Styled.ListItem>
          );
        })
        }
      </Styled.TermsList>
    </Styled.PageWrapper>
  );
};

export default TermsPage;
