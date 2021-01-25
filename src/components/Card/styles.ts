import styled from 'styled-components';

import { H3, H4 } from '../Typography';
interface Theme{
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
}

export const Basecard = styled.div<Theme>`
  padding: 35px;
  width: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.backgroundColor};
  
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

export const CardTitle = styled(H3)<Theme>`
  color: ${props => props.textColor};
  margin: ${props => props.margin};
  font-weight: 600;
  text-align: center;
`;

export const CardContent = styled(H4)<Theme>`
  color: ${props => props.textColor};
  font-weight: 400;
`;
