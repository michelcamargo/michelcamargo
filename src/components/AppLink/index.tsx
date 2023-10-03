import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {
  children: ReactNode,
  href: string,
  target?: HTMLAttributeAnchorTarget,
}

const AppLink = ({ children, href, target, isDisabled }: Props) => {
  
  return (
    <Styled.Anchor href={href} target={target} isDisabled={isDisabled}>
      {children}
    </Styled.Anchor>
  );
};

export default AppLink;
