import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  href: string,
  target?: HTMLAttributeAnchorTarget,
  underline?: 'static' | 'ease',
}

const AppLink = ({ children, href, target, isdisabled, underline, color }: Props) => {
  
	return (
		<Styled.Anchor
			href={href}
			target={target}
			isdisabled={isdisabled}
			_underline={underline}
			color={color}
		>
			{children}
		</Styled.Anchor>
	);
};

export default AppLink;
