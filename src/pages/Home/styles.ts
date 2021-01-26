import styled from 'styled-components';
import { H1, H2, H3 } from '../../components/Typography';

interface Props{
  
}

export const Content = styled.section`
  align-items: center;

  display: flex;
  flex-direction: column;
`;

export const Resume = styled.div`
  margin: 9vh 0;
  /* padding: 8vh 0; */
  display: flex;
  align-content: center;
  vertical-align: middle;
`;

export const Picturebox = styled.div`
  /* padding-top: 3px; Ajuste de offset */
`;

export const Textbox = styled.div`
  margin-left: 25px;
  width: 550px;
  height: 200px;
`;

Textbox.MainTitle = styled(H1)<Props>`
  margin: 50px;
`;

Textbox.Title = styled(H2)<Props>`
  margin: 50px;
`;

Textbox.Subtitle = styled(H3)<Props>`
  margin: 50px;
`;

export const Skills = styled.section`
  padding-top: 10vh; 
  display: flex;
  flex-direction: row;
`;