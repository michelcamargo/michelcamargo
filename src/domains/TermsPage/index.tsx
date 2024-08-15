import React, { useMemo } from 'react';

import DefaultViewHeading from "@/components/CommonViewHeading";
import LoadingFeedback from "@/components/LoadingFeedback";
import { SessionArticle } from "@/lib/content";
import { CommonPageProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

type Props = {
  data: SessionArticle[]
} & CommonPageProps;

const TermsPage: CustomNextPage<Props> = ({ data, meta }: Props) => {
  // const sessions = useMemo(() => data?.sessions, [data]);
  
  console.log('DATA >>>', data);
  
  // if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <DefaultViewHeading title={meta.title} subtitle={meta.description} />
      <Styled.TermsList>
        {/*{ sessions.map((item, index) => {*/}
        {/*  const { heading, body } = item;*/}
        {/*  */}
        {/*  return (*/}
        {/*    <Styled.ListItem key={index}>*/}
        {/*      <Styled.ListItemContent>*/}
        {/*        <Styled.ListItemHeading>*/}
        {/*          {heading}*/}
        {/*        </Styled.ListItemHeading>*/}
        {/*        <Styled.ListItemDescription>*/}
        {/*          {body}*/}
        {/*        </Styled.ListItemDescription>*/}
        {/*      </Styled.ListItemContent>*/}
        {/*    </Styled.ListItem>*/}
        {/*  );*/}
        {/*})*/}
        {/*}*/}
      </Styled.TermsList>
    </Styled.PageWrapper>
  );
};

export default TermsPage;
