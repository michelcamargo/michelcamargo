import { useCallback, useState } from "react";

import LoadingFeedback from "@/components/LoadingFeedback";
import CustomContent from "@/helpers/custom-content";
import Hydration from '@/helpers/hydration';
import useDidMount from "@/hooks/useDidMount";
import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';
import AppLink from "@/components/AppLink";

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
  
  const linkTreeContent = viewSessions.find(item => item.key === 'link-tree');
  const linksContent = linkTreeContent ? linkTreeContent.getChildren() : [];
  
  const linkArray = linksContent.map(item => {
    console.log('item', item);
    
    return {
      label: item.getContent('label') ?? '',
      link: item.getContent('link') ?? '',
      icon: item.getContent('icon') ?? null,
    };
  });
  
  return (
    <Styled.PageWrapper>
      <Styled.MainColumn>
        {linkArray.map((item, index) => (
          <AppLink key={index} href={item.link}>
            <Styled.LinkRow key={index}>
              <Styled.LinkContent>
                {item.icon}
                {/*<Styled.LinkIcon />*/}
                <Styled.LinkLabel>
                  {item.label}
                  {/*{JSON.stringify(item)}*/}
                </Styled.LinkLabel>
              </Styled.LinkContent>
            </Styled.LinkRow>
          </AppLink>
        ))}
      </Styled.MainColumn>
    </Styled.PageWrapper>
  );
};

export default LinkTreePage;
