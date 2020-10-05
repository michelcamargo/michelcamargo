import styled, { css } from 'styled-components';

const BaseCard = styled.div`
  text-align: center;
  background-color: white;

  border: solid gray 5px;
  
  margin: 5px;

  border-radius: 8px;
  justify-content: center;

  width: ${({ width }) => width};

`;

BaseCard.Top = styled.div`
  /* Se houver valor em 'name' aplica o estilo */
  ${({ hasName }) => hasName && css`
    background-color: ${({ color }) => color};
    color: black;
    padding: 5px;
  `
}`;

BaseCard.Content = styled.div`
  padding: 10px;
`;

BaseCard.Bottom = styled.div`
/* Se houver valor em 'label' aplica o estilo */
  ${({ hasLabel }) => hasLabel && css`
    background-color: blue;
    padding: 5px;
  `
}`;

export default BaseCard;
