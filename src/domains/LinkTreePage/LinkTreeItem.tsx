import AppLink from "@/components/AppLink";
import Styled from "@/domains/LinkTreePage/styles";
import { LinkItemType } from "@/lib/content";

const LinkTreeItem = ({ content, key }: { content: LinkItemType, key: number }) => (
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

export default LinkTreeItem;