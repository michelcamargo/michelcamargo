import React, {useState} from 'react';

import {HeaderWrapper, HeaderContainer, HeaderNavigation, NavList, NavItem} from './styles';
import Image from "../Image";
import Sidebar from "../Sidebar";

const path_Logo = require("../../assets/images/logo.svg") as string;

interface HeaderProps {
    sticky?: boolean;
}

const Header: React.FC<HeaderProps> = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <HeaderWrapper>
            <Sidebar visible={sidebarVisible} />

            <HeaderContainer>
                <Image src={path_Logo} width="60px" link="/" />
                <HeaderNavigation>
                    <NavList>
                        <NavItem>Início</NavItem>
                        <NavItem onClick={() => (setSidebarVisible(!sidebarVisible))}>Contato</NavItem>
                    </NavList>
                </HeaderNavigation>
            </HeaderContainer>
        </HeaderWrapper>
    );

}

export default Header;