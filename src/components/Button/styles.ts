import styled from 'styled-components';

interface Props{
  color?: string;
  bgColor?: string;
}

export const Btn1 = styled.button<Props>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.color};
    color: ${props => props.bgColor};

    font-weight: 600;

    
  }

  transition-duration: 200ms;

`;

export const Btn2 = styled.button<Props>`
  background-color: transparent;
  color: ${props => props.color};
  padding: 10px 20px;
  font-size: 1.15rem;
  font-weight: 500;
  cursor: pointer;

  /* text-decoration: underline; */

  &:hover{
    /* text-decoration: none; */
    color: ${props => props.bgColor};
    background-color: ${props => props.color};

    font-weight: 600;

    
  }

  transition-duration: 200ms;

`;
