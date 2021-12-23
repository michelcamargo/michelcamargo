import styled from 'styled-components';

interface InputProps{
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  width?: string;
  height?: string;
}

export const InputElement = styled.input<InputProps>`
  width: ${props => props.width || "max-content"};
  height: ${props => props.height || "max-content"};
  
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};

  background-color: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.textPrimary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
`;
