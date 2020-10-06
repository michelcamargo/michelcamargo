import styled from 'styled-components';

export const Head = styled.header`
  position: absolute; /* Posicionar-se sobre */
  top: 0;
  left: 0;
  
  display: flex;

  justify-content: space-between; /* espaçando o logo e o nav */

  align-items: center;
  /* padding: 20px 50px; */
`;

export const Logo = styled.img`
  width: 130px;
`;

Head.Nav = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  text-decoration: none;
`;

List.Item = styled.li`
  margin: 0 15px; /* separando itens da lista em header */
  list-style: none;

  &:first-child{
    margin-left: 0; /* selecionando primeiro item e tirando margin */
  }

  &:last-child{
    margin-right: 0; /* selecionando último item e tirando margin */
  }
`;
