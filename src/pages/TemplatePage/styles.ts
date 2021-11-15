import styled from 'styled-components';

interface TemplateProps {
    urlBackground?: string;

}

export const Template = styled.main<TemplateProps>`
  display: flex;
  flex-direction: column;

  background-image: ${props => props.urlBackground ? `url(${props.urlBackground}) center/100% no-repeat` : undefined});
  background-color: ${props => props.urlBackground ? undefined : props.theme.colors.backgroundPrimary};
  background-repeat: no-repeat;
  /* background-position: 200px 70px;  */
  height: 100vh;
`;
