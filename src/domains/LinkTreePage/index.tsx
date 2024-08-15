import { useMemo } from "react";

import AppLink from "@/components/AppLink";
import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import { LinkTreeItem } from "@/lib/content";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

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

const LinkTreePage: CustomNextPage = ({ data }) => {
  const sessions = useMemo(() => data?.sessions, [data]);
  
  const linkArray = useMemo(() => {
    const links = sessions?.getChildren('links') ?? [];
    
    return links?.map(item => {
      const [ link, label, icon ] = [
        item.getValue('link'), item.getValue('label'), item.getValue('icon')
      ];
      
      if (!link || !label) return;
      
      return { link, label, icon };
    }) ?? [];
  }, [sessions]);
  
  if (!sessions) return <LoadingFeedback />;
  
  return (
    <Styled.PageWrapper>
      <MinimalHeader />
      <Styled.Content>
        <Styled.MainColumn>
          {linkArray.map((item, index) =>
            <LinkTreeItem content={item as LinkTreeItem} key={index} />)}
        </Styled.MainColumn>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};

export default LinkTreePage;
