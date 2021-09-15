import styled from 'styled-components';

interface Theme{
  color?: string;
  bgColor?: string;
  width?: string;
}

export const StyledLinkElement = styled.a<Theme>`
  color: ${props => props.color || "var(--white)"};
  width: ${props => props.width || "fit-content"};

  font-size: 1.2rem;

  text-decoration: none;
`;

export const StyledButtonElement = styled.button<Theme>`
  color: ${props => props.color || "var(--white)"};
  background-color: ${props => props.bgColor};
  width: ${props => props.width || "fit-content"};

  
  text-shadow: none;
  font-weight: 500;

  border: none;
  
  padding: 4px 8px;

  text-align: center;

  transition-duration: 300ms;

  &:hover{
    background-color: var(--otherDark) !important;
    font-weight: 800;
    
  }

  border-radius: 4px;

`;

