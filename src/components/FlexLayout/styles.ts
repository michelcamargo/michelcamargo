import styled from 'styled-components';

interface FlexProps {
    fullWidth: boolean;
    bgColor: string;
}

export const FlexRow = styled.section<FlexProps>`
  display: flex;
  width: 100%;
  height: max-content;
  
  background-color: ${props => props.bgColor ? props.bgColor : undefined};
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div<FlexProps>`
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const FlexRowContent = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${props => props.fullWidth ? `0 ${props.theme.spacing.large}` : `0 ${props.theme.spacing.medium}`};
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexCol = styled.div<FlexProps>`
    
`;

export const FlexColContent = styled.div<FlexProps>`

`;