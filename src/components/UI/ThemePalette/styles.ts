import styled from 'styled-components';

type ThemePaletteProps = {
    rounded?: boolean;
    colorBg?: string;
    paletteColor: string;
    hex: string;
}

export const PaletteLabel = styled.h6<ThemePaletteProps>`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.textPrimary};
`;

export const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium} 0;
`;

export const PaletteColor = styled.div`
  background: ${props => props.hex};
  box-shadow: ${props => props.theme.shadow};
  border: 2px rgba(0,0,0, .2) solid;
  border-radius: ${props => props.theme.borderRadius.medium};
  width: 45px;
  height: 45px;
  opacity: .85;

  filter: blur(1px);
  
  transition: 300ms ease-out;
  
  &:hover {
    transform: scale(1.1);
    opacity: 1;
    filter: blur(0);
    border-radius: 100%;
    
    &::after { 
      content: "${props => props.hex} ${props => props.paletteColor}";
      font-size: ${props => props.theme.fontSize.smaller};
      color: ${props => props.theme.colors.textPrimary};
      background: ${props => props.theme.colors.backgroundPrimary};
      box-shadow: ${props => props.theme.shadow};
      border-radius: ${props => props.theme.borderRadius.medium};
      padding: 4px;
      position: absolute;
      display: block; 
      bottom: -40px;
      left: 0;
    }
  }
`;

