import React, { ReactNode } from 'react';

import { StyledLinkElement, StyledButtonElement } from './styles';

interface StyledLinkProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  bgColor?: string;
  isButton?: boolean;
  width?: string;
  to?: string | "#";
  target?: string;
}

export function StyledLink({children, color, bgColor, width, to, target}: StyledLinkProps){

  if(bgColor) {
    return(
        <StyledButtonElement bgColor={bgColor}>
          <StyledLinkElement color={color} href={to} target={target}>
            {children}
          </StyledLinkElement>
        </StyledButtonElement>
    )
  }

  else {
    return(
      <StyledLinkElement color={color} width={width} href={to} target={target}>
        {children}
      </StyledLinkElement>
    )
  }
}