import styled from 'styled-components';

const BaseCard = styled.div`
  text-align: center;
  background-color: white;

  border: solid green 5px;
  
  margin: 5px;

  border-radius: 8px;
  justify-content: center;

  width: ${({ width }) => width};

`;

BaseCard.Label = styled.span`
  color: black;
  padding: 3px;
  margin-bottom: 2px;
`;

BaseCard.Content = styled.div`
  background-color: grey;
  padding: 10px;
`;

BaseCard.Bottom = styled.div`
  background-color: red;
  padding: 10px;
`;

export default BaseCard;
