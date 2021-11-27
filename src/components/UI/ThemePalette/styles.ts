import styled from 'styled-components';

type ThemePaletteProps = {
    rounded?: boolean;
    colorBg?: string;
    paletteColor: string;
}

export const PaletteLabel = styled.h6<ThemePaletteProps>`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.textPrimary};
`;

export const PaletteList = styled.li<ThemePaletteProps>`
  display: flex;
  flex-direction: row;
  column-gap: ${props => props.theme.spacing.medium};
`;

export const PaletteColor = styled.div`
  background: ${props => props.paletteColor};
  box-shadow: ${props => props.theme.shadow};
  border: 2px rgba(0,0,0, .2) solid;
  border-radius: ${props => props.theme.borderRadius.medium};
  width: 45px;
  height: 45px;
  opacity: .85;
  
  transition: 200ms ease-out;
  
  &:hover {
    transform: scale(1.1);
    opacity: 1;
    
    &::after { 
      content: "${props => props.paletteColor}";
      font-size: ${props => props.theme.fontSize.smaller};
      color: ${props => props.theme.colors.textPrimary};
      background: ${props => props.theme.colors.backgroundPrimary};
      box-shadow: ${props => props.theme.shadow};
      border-radius: ${props => props.theme.borderRadius.medium};
      padding: 4px;
      position: absolute;
      display: block; 
      bottom: -50%;
      left: 0;
    }
  }
`;

export const PaletteContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium} 0;
`;