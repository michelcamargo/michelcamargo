import React from 'react';

import AppLink from "@/components/AppLink";
import { CustomNavItem } from "@/lib/datahooks";

import Styled from './styles';

interface Props {
  items?: Array<CustomNavItem>
}

const FooterMenu = ({ items }: Props) => {
	if (!items?.length) return <></>;
  
	return (
		<Styled.Wrapper>
			<Styled.List>
				{ items.map(item => {
					return (
						<Styled.ListItem key={item.key}>
							<AppLink href={item.href} underline={'ease'}>
								{item.label}
							</AppLink>
						</Styled.ListItem>
					);
				})}
			</Styled.List>
		</Styled.Wrapper>
	);
};

export default FooterMenu;
