import styled from 'styled-components';

interface TemplateProps {
    bgColor?: string;
}

export const Template = styled.div<TemplateProps>`
  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.bgColor ? undefined : props.theme.colors.backgroundPrimary};
  height: 100vh;
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  
`;
