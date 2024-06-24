import {useCallback, useMemo, useState} from "react";

import AppLink from "@/components/AppLink";
import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { LinkTreeItem } from "@/lib/content";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

interface Props {
  serverViewData: ServerViewProps,
}

const LinkTreeItem = ({ content, key }: { content: LinkTreeItem, key: number }) => (
  <AppLink key={key} href={content.link}>
    <Styled.LinkRow key={key}>
      <Styled.LinkContent>
        {content.icon}
        <Styled.LinkLabel>
          {content.label}
        </Styled.LinkLabel>
      </Styled.LinkContent>
    </Styled.LinkRow>
  </AppLink>
);

const LinkTreePage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const sessions = useMemo(() => {
    const { sessions: _sessions } = Hydration.parseViewProps<CustomContent>(serverViewData);
    return _sessions;
  }, [serverViewData])
  
  if (!sessions) return <LoadingFeedback />;
  
  const linkTreeContent = sessions.find(item => item.key === 'link-tree');
  const linksContent = linkTreeContent ? linkTreeContent.getChildren() : [];
  
  const linkArray: Array<LinkTreeItem> = linksContent?.length ? linksContent.map(item => {
    return {
      label: item.getContent('label') ?? '',
      link: item.getContent('link') ?? '',
    };
  }) : [];
  
  return (
    <Styled.PageWrapper>
      <MinimalHeader />
      <Styled.Content>
        <Styled.MainColumn>
          {linkArray.map((item, index) => (<LinkTreeItem content={item} key={index} />))}
        </Styled.MainColumn>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};

export default LinkTreePage;
