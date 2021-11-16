import styled from 'styled-components';

interface HeaderProps {
    fullWidth?: boolean;
    sticky?: boolean;
    color?: string;
    fontSize?: string;
    bgColor?: string;
}

export const HeaderWrapper = styled.div<HeaderProps>`
  width: 100%;
  position: relative;
  
  padding-top: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.medium};
  
  background: ${props => props.bgColor ? props.bgColor : props.theme.colors.backgroundSecondary};
`;

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: ${props => props.fullWidth ? `0 ${props.theme.spacing.large}` : `0 ${props.theme.spacing.medium}`};
  margin: ${props => props.fullWidth ? undefined : "0 auto"};
  max-width: ${props => props.fullWidth ? undefined : props.theme.containerWidth};
`;

export const HeaderNavigation = styled.nav<HeaderProps>`
`;

export const NavList = styled.ul<HeaderProps>`
  display: flex;
  column-gap: ${props => props.theme.spacing.medium};
  align-items: center;
`;

export const NavItem = styled.li<HeaderProps>`
  color: ${props => props.color ? props.color : props.theme.colors.textPrimary};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.small};
`;

export const HeaderLogoLink = styled.a<HeaderProps>``;

export const HeaderLogo = styled.img<HeaderProps>``;
