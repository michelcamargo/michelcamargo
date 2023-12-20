import React, { useCallback, useState } from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import LoadingFeedback from "@/components/LoadingFeedback";
import Hydration from "@/helpers/hydration";
import useDidMount from "@/hooks/useDidMount";
import { SessionArticle } from "@/lib/content";
import { ViewMetadata, ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps<SessionArticle>
}

const TermsPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const [viewHead, setViewHead] = useState<Partial<ViewMetadata> | null>(null);
  const [viewSessions, setViewSessions] = useState<Array<SessionArticle>>([]);
  
  const hydratePage = useCallback(() => {
    const {
      viewTitle, viewSubtitle, viewSessions: sessions
    } = Hydration.parseViewProps<SessionArticle>(serverViewData, true);
    
    setViewHead({ title: viewTitle, description: viewSubtitle });
    setViewSessions(sessions as Array<SessionArticle>);
  }, [serverViewData]);
  
  useDidMount(() => {
    if (serverViewData) {
      hydratePage();
    }
  });
  
  if (!viewHead || !viewSessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      {viewHead?.title && <DefaultViewHeading title={viewHead.title} subtitle={viewHead.description} />}
      <Styled.TermsList>
        { viewSessions.map((item, index) => {
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
