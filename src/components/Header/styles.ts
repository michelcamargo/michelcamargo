import styled from 'styled-components';

interface HeaderProps {
    sticky?: boolean;
}

export const HeaderWrapper = styled.div<HeaderProps>`
  width: 100%;
  position: fixed;
`;

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderNavigation = styled.nav<HeaderProps>``;

export const NavList = styled.ul<HeaderProps>``;

export const NavItem = styled.li<HeaderProps>``;

export const HeaderLogoLink = styled.a<HeaderProps>``;

export const HeaderLogo = styled.img<HeaderProps>``;
