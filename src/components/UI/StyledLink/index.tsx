import React, {ReactNode} from 'react';

import { StyledAnchor, StyledLinkContainer, StyledButton} from './styles';

interface StyledLinkProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  background?: string;
  width?: string;
  to?: string | "#";
  target?: string;
  rounded?: boolean;
  icon?: React.FC;
}

function StyledLink({children, color, background, width, to, target, rounded, icon}: StyledLinkProps){
  if(background) {
    return(
        <StyledButton background={background} rounded={rounded}>
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