import styled from 'styled-components';
import { Link } from "react-router-dom";

interface Theme{
  color?: string;
  bgColor?: string;
  width?: string;
}

export const IntBtn1 = styled(Link)<Theme>`
  color: ${props => props.color || "#FFF"};
  background-color: ${props => props.bgColor || "#222"};
  width: ${props => props.width};
`;

export const IntBtn2 = styled(Link)<Theme>`
  color: ${props => props.color || "#FFF"};
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
    background-color: #444 !important;
    font-weight: 700;
    color: "#FFF";
  }

  border-radius: 4px;

`;

