import styled from 'styled-components';

interface Theme{
  color?: string;
  bgColor?: string;
  width?: string;
}

export const ExtBtn1 = styled.a<Theme>`
  color: ${props => props.color || "var(--white)"};
  background-color: ${props => props.bgColor || "var(--black)"};
  width: ${props => props.width};

`;

export const ExtBtn2 = styled.a<Theme>`
  color: ${props => props.color || "var(--white)"};
  background-color: ${props => props.bgColor};
  width: ${props => props.width};

  font-size: 1.2rem;

  text-decoration: none;
  text-shadow: none;
  font-weight: 600;

  padding: 10px;

  text-align: center;

  transition-duration: 300ms;

  &:hover{
    background-color: var(--otherDark) !important;
    font-weight: 800;
    color: var(--white);
  }

  border-radius: 4px;

`;

