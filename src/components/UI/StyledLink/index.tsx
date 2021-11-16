import React, {ReactNode} from 'react';

import { StyledAnchor, StyledLinkContainer, StyledButton, StyledLinkIcon} from './styles';

interface StyledLinkProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  bgColor?: string;
  width?: string;
  to?: string | "#";
  target?: string;
  rounded?: boolean;
  icon?: React.FC;
}

function StyledLink({children, color, bgColor, width, to, target, rounded, icon}: StyledLinkProps){
  if(bgColor) {
    return(
        <StyledButton bgColor={bgColor} rounded={rounded}>
          <StyledLinkContainer className={"styledLinkContainer"}>
            {icon && icon}
            <StyledAnchor className={"styledAnchor"} color={color} href={to} target={target}>
              {children}
            </StyledAnchor>
          </StyledLinkContainer>
        </StyledButton>
    )
  } else {
    return(
      <StyledLinkContainer className={"styledLinkContainer"}>
        <StyledAnchor className={"styledAnchor"} color={color} width={width} href={to} target={target}>
          {children}
        </StyledAnchor>
      </StyledLinkContainer>

    )
  }
}

export default StyledLink;