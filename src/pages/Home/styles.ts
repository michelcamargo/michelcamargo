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
  justify-content: center;
  width: 100%;
  background: #f1f1f1;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div<Props>`
  max-width: ${props => props.containerWidth}px;
  width: 100%;
  padding: 1rem 0;
  background: blue;
`;

export const FlexRowContent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background: green;
  height: max-content;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

