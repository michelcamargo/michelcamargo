import styled from 'styled-components';

import { Link } from "react-router-dom";

import Background from "../../assets/images/elijah-odonnell.jpg";

export const Template = styled.main`
  display: flex;
  flex-direction: column;

  background-image: url(${Background});
  background-repeat: no-repeat;
  /* background-position: 200px 70px;  */
  height: 100vh;
`;

export const Headbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
`;

export const Footbar = styled.footer`
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  list-style: none;
  
`;

Nav.Item = styled(Link)`
  width: 150px;
  color: #ffffff;

  font-size: 1.2rem;

  text-decoration: none;
  text-shadow: none;
  font-weight: 600;

  padding: 10px;

  text-align: center;

  transition-duration: 300ms;

  /* Definir ativo */

  &:hover,
  &:active{
    background-color: #ffffff;
    font-weight: 800;
    color: #000000;
  }
  
`;
