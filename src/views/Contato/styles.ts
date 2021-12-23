import styled from 'styled-components';

interface Props{
  flex?: string;
}

export const Content = styled.section`
  align-items: center;

  display: flex;
  flex-direction: column;
`;

export const FormSection = styled.section`
  background-color: #555;
  border-radius: 4px;

`;

export const FieldGroup = styled.fieldset<Props>`
  color: #FFF;
  display: flex;
  flex-direction: ${props => props.flex};
`;