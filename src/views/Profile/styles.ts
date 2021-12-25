import styled from 'styled-components';

interface Props{
  color: string;
  fontSize: string;
}

export const Skills = styled.section<Props>`
  padding-top: 10vh; 
  display: flex;
  flex-direction: row;
`;

