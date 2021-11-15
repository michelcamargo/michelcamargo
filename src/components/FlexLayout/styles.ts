import styled from 'styled-components';

interface Props {
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
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const FlexRowContent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${props => props.fullWidth ? `0 ${props.theme.spacing.large}` : `0 ${props.theme.spacing.medium}`};
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexCol = styled.div<Props>`
    
`;

export const FlexColContent = styled.div<Props>`

`;