import styled from 'styled-components';

interface TemplateProps {
    background?: string;
}

export const Template = styled.div<TemplateProps>`
  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.background ? undefined : props.theme.colors.backgroundPrimary};
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  
`;
