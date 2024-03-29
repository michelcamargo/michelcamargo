import styled from "styled-components";
import {ReactNode} from "react";

interface NavbarProps {
    children?: ReactNode;
    className?: string;
    color?: string;
    background?: string;
    isButton?: boolean;
    width?: string;
    to?: string | "#";
    target?: string;
}

export const NavigationWrapper = styled.nav<NavbarProps>`
`;

export const NavList = styled.ul<NavbarProps>`
  display: flex;
  column-gap: ${props => props.theme.spacing.medium};
  align-items: center;
`;

export const NavItem = styled.li<NavbarProps>`
  
`;

export const NavLink = styled.a<NavbarProps>`
  color: ${props => props.color ? props.color : props.theme.colors.anchor};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSize.small};
  
  text-decoration: none;
  

  cursor: pointer;
`;

export const HeaderLogoLink = styled.a<NavbarProps>``;

export const HeaderLogo = styled.img<NavbarProps>``;