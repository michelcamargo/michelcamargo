import styled from 'styled-components';

interface ContactProps{
  flex?: string;
}

export const Content = styled.section<ContactProps>`
  align-items: center;

  display: flex;
  flex-direction: column;
`;

export const Form = styled.form<ContactProps>`
  display: flex;
  flex-direction: column;
  
  background-color: ${ props => props.theme.colors.backgroundAlternative };
  border-radius: ${ props => props.theme.borderRadius.small };

  row-gap: ${ props => props.theme.spacing.medium };
  padding: ${ props => props.theme.spacing.medium };

  margin-top: ${ props => props.theme.spacing.largest };
`;

export const FormLabel = styled.legend<ContactProps>`
  color: ${props => props.theme.colors.textPrimary__inverted};
  font-size: ${props => props.theme.fontSize.large};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const FieldGroup = styled.fieldset<ContactProps>`
  display: flex;
  flex-direction: ${props => props.flex};
`;