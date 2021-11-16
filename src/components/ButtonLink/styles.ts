import styled from 'styled-components';

interface LinkProps{
  color?: string;
  bgColor?: string;
  width?: string;
}

export const StyledLinkElement = styled.a<LinkProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textLink};
  width: ${props => props.width || "fit-content"};

  font-size: 1.2rem;

  text-decoration: none;
`;

export const StyledButtonElement = styled.button<LinkProps>`
  color: ${props => props.color || "#FFF"};
  background-color: ${props => props.bgColor};
  width: ${props => props.width || "fit-content"};

  
  text-shadow: none;
  font-weight: 500;

  border: none;
  
  padding: 4px 8px;

  text-align: center;

  transition-duration: 300ms;

  &:hover{
    background-color: #444 !important;
    font-weight: 800;
    
  }

  border-radius: 4px;

`;

