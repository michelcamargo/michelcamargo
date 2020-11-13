import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Posicionar-se sobre */
  align-content: space-between;
  width: 100%;
`;

export const Logo = styled.img`
  width: 130px;
  opacity: .6;
  transition: 500ms;

  &:hover{
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  margin-right: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

Nav.Item = styled.div`
  margin: 10px;
  text-shadow: 0 0 15px #FFFFFF;
`;
