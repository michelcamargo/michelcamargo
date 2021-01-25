import styled from 'styled-components';

interface cardProps{
  backgroundColor?: string;
}

export const Basecard = styled.div<cardProps>`

  background-color: ${props => props.backgroundColor};

  padding: 35px;
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 300px;
  height: 320px;

  margin-left: 100px;

  &:first-of-type{
    margin-left: 0px;
  }

  border-radius: 8px;
`;
