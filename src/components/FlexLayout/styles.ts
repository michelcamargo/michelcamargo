import styled from 'styled-components';

interface Props {
    maxWidth: number;
    fullWidth: boolean;
}

export const FlexRow = styled.section<Props>`
  display: flex;
  width: 100%;
  height: max-content;
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div<Props>`
  max-width: ${props => props.maxWidth}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

export const FlexRowContent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${props => props.fullWidth ? "1rem" : undefined};
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexCol = styled.div<Props>``;

export const FlexColContent = styled.div<Props>``;