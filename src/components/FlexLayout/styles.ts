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
  height: max-content;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div<Props>`
  max-width: ${props => props.containerWidth}px;
  width: 100%;
`;

export const FlexRowContent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  padding: 0 1rem;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;