import React from 'react';

import {HeaderWrapper, HeaderContainer, HeaderNavigation, NavList, NavItem} from './styles';

interface HeaderProps {
    sticky?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <div>logo</div>
                <HeaderNavigation>
                    <NavList>
                        <NavItem>Início</NavItem>
                        <NavItem>Contato</NavItem>
                    </NavList>
                </HeaderNavigation>
            </HeaderContainer>
        </HeaderWrapper>
    );

}

export default Header;