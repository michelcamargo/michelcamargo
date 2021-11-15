import styled from 'styled-components';

interface TemplateProps {
    urlBackground?: string;

}

export const Template = styled.main<TemplateProps>`
  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.urlBackground ? undefined : props.theme.colors.backgroundPrimary};
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;
