import styled from 'styled-components';
import { H1, H2, H3 } from '../../components/Typography/styles';

interface Props{
  color: string;
  fontSize: string;
}

export const Content = styled.section<Props>`
  width: 100%;
  max-width: ${
    props => { 
      const isFullWidth = props.isFullWidth;
      
      if(isFullWidth === true) {
        return ("100%");
      }
      
      else {
        return ("1130px");
      }
    }
  };
  align-items: center;
  

  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const FlexRow = styled.section<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.isCenter};
  width: 100%;
  padding: 1rem 0;
  
  @media(max-width: 768px) {
    width: 100%;
  }
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
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

Textbox.Title = styled(H2)<Props>`
  margin-top: 5px;
`;

Textbox.Subtitle = styled(H3)<Props>`
  margin-top: 10px;
`;

export const Skills = styled.section`
  padding-top: 10vh; 
  display: flex;
  flex-direction: row;
`;