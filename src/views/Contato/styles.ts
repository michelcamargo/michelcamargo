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
  background-color: ${props => props.theme.colors.mono.black};
  border-radius: ${props => props.theme.borderRadius.small};

  padding: ${props => props.theme.spacing.medium};

  margin-top: ${props => props.theme.spacing.largest};
`;

export const FormLabel = styled.legend<ContactProps>`
  font-size: ${props => props.theme.fontSize.large};
`;

export const FieldGroup = styled.fieldset<ContactProps>`
  color: ${props => props.theme.colors.textPrimary};
  display: flex;
  flex-direction: ${props => props.flex};
`;