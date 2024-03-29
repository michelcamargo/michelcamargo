import styled from 'styled-components';

interface FlexProps {
    isFullWidth?: boolean;
    background?: string;
}

export const FlexRow = styled.section<FlexProps>`
  display: flex;
  width: 100%;
  height: max-content;
  padding-top: ${ props => props.theme.spacing.largest };
  padding-bottom: ${ props => props.theme.spacing.largest };
  background: ${ props => props.background && props.background };
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

FlexRow.Container = styled.div<FlexProps>`
  max-width: ${ props => props.theme.containerWidth };
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

FlexRow.Content = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${ props => props.fullWidth ? `0 ${props.theme.spacing.large}` : `0 ${props.theme.spacing.medium}` };
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FlexCol = styled.div<FlexProps>`
    
`;

FlexCol.Content = styled.div<FlexProps>`

`;