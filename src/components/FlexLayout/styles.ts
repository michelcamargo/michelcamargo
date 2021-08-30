import styled from 'styled-components';

interface Props {
    containerWidth: number;
    isFullWidth: boolean;
}

export const FlexRow = styled.section<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: blue;
  opacity: .5;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div<Props>`
  max-width: ${props => props.containerWidth}px;
  width: 100%;
  background: red;
  opacity: .5;

  padding: ${
      (props) => {
        const isFullWidth = props.isFullWidth;
        // isFullWidth ? (return 1) : (return 0);

        if(isFullWidth) {
          return "0 1rem";
        } else {
          return 0;
        }
      }
  };
`;

export const FlexRowContent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background: #fff;
  opacity: .5;
  height: max-content;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;