import styled from 'styled-components';
import { shade } from 'polished';
import Icon from '../Icon';

interface LinkProps{
  color?: string;
  background?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  rounded?: boolean;
}

export const StyledAnchor = styled.a<LinkProps>`
  color: ${props => props.color ? props.color : props.theme.colors.anchor};
  width: ${props => props.width || "fit-content"};
  cursor: pointer;

  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};

  text-decoration: none;
  
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.color ? (shade(0.1, props.color)) : (shade(0.1, props.theme.colors.anchor))};
    text-decoration: underline;
  }
`;

export const StyledLinkContainer = styled.div<LinkProps>`
  display: flex;
  column-gap: ${props => props.theme.spacing.medium};
  align-items: center;
`;

export const StyledLinkIcon = styled(Icon)<LinkProps>`
  
`;

export const StyledButton = styled.button<LinkProps>`
  // color: ${props => props.color ? props.color : props.theme.colors.textLink__inverted};
  background-color: ${props => props.background};
  border: none;
  padding: ${props => `${props.theme.spacing.smaller} ${props.theme.spacing.medium}`};
  border-radius: ${props => props.rounded ? "100%" : props.borderRadius ? props.borderRadius : props.theme.borderRadius.small};
  cursor: pointer;
  
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
  text-align: center;
  text-shadow: none;

  transition: ${props => props.theme.transition};

  &:hover{
    background-color: ${props => shade(0.2, props.background)};

    a {
      text-decoration: none !important;
      color: ${props => props.color ? props.color : props.theme.colors.textLink__inverted} !important;
    }
  }

`;

