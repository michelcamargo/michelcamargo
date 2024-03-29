import styled from 'styled-components';

interface CardProps{
  background?: string;
  color?: string;
  margin?: string;
}

export const Basecard = styled.div<CardProps>`
  padding: 40px;
  width: 270px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.background};
  
  border-radius: 8px;

  margin-left: 100px;

  &:first-of-type{
    margin-left: 0px;
  }

  &:hover{
    background-color: #0A1D24;
  }
`;

/* Permitir mudar características de fonte no card ( atual: Não alterando ) */

Basecard.Header = styled.h3<CardProps>`
  color: ${props => props.color};
  margin: 10px 0;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;

  padding: 20px 0;
`;

Basecard.Content = styled.div<CardProps>`
  color: ${props => props.color};
`;
