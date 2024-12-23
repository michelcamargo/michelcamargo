import { useMemo } from "react";

import { MinimalHeader } from "@/components/HeaderTemplate";
import LoadingFeedback from "@/components/LoadingFeedback";
import LinkTreeItem from "@/domains/LinkTreePage/LinkTreeItem";
import { LinkItemType } from "@/lib/content";
import { CustomNextPage } from "@/lib/layout";

import Styled from './styles';

const LinkTreePage: CustomNextPage = ({ data }) => {
	const sessions = useMemo(() => data?.sessions, [data]);
	
	const linkArray = useMemo(() => {
		const links = sessions?.getChildren();
		
		return links?.map(item => {
			const [ link, label, icon ] = [
				item.getValue('link'), item.getValue('label'), item.getValue('icon')
			];
      
			if (!link || !label) return;
      
			return { link, label, icon } as LinkItemType;
		}) ?? [];
	}, [sessions]);
  
	if (!sessions) return <LoadingFeedback />;
  
	return (
		<Styled.PageWrapper>
			<MinimalHeader />
			<Styled.Content>
				<Styled.MainColumn>
					{linkArray.map((item, index) => (
						item && <LinkTreeItem content={item} key={index} />
					))}
				</Styled.MainColumn>
			</Styled.Content>
		</Styled.PageWrapper>
	);
};

export default LinkTreePage;
