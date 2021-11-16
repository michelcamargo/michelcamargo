import styled from 'styled-components';
import { shade } from 'polished';

interface LinkProps{
  color?: string;
  bgColor?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const StyledLinkElement = styled.a<LinkProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textLink};
  width: ${props => props.width || "fit-content"};
  cursor: pointer;

  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};

  text-decoration: none;
  
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.color ? (shade(0.1, props.color)) : (shade(0.1, props.theme.colors.textLink))};
    text-decoration: underline;
  }
`;

export const StyledButtonElement = styled.button<LinkProps>`
  color: ${props => props.color || "#FFF"};
  background-color: ${props => props.bgColor};
  width: ${props => props.width || "fit-content"};

  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
  
  text-shadow: none;

  border: none;
  border-radius: ${props => props.rounded ? "100%" : props.theme.borderRadius.small}

  text-align: center;

  transition: ${props => props.theme.transition};

  &:hover{}

`;

