import styled from 'styled-components';

type InputProps = {
  type: string,
  name: string,
  value?: string,
  placeholder?: string,
  width?: string,
  maxWidth?: string,
  height?: string
  maxHeight?: string
}

export const InputElement = styled.input<InputProps>`
  width: ${ props => props.width && props.width };
  max-width: ${ props => props.maxWidth && props.maxWidth };
  height: ${ props => props.height && props.height };
  max-height: ${ props => props.maxHeight && props.maxHeight };
  
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};

  background-color: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.textPrimary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
`;

export const InputLabel = styled.label<InputProps>`
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.fontSize.smaller};
`;
