import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute; /* Posicionar-se sobre */
`;

export const Logo = styled.img`
  width: 130px;
  position: absolute;
  top: 0;
  left: 0;

  opacity: .6;

  transition: 500ms;

  &:hover{
    opacity: 1;
    width: 131px;
    text-align: center;
  }

`;

// Head.Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   justify-content: space-between;
// `;
