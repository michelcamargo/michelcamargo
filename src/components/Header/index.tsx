import React, {useContext, useState} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import {HeaderWrapper, HeaderContainer, HeaderNavigation, NavList, NavItem} from './styles';
import Image from "../Image";
import Sidebar from "../Sidebar";

const path_Logo = require("../../assets/images/logo.svg") as string;

interface HeaderProps {
    sticky?: boolean;
    toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    const { title, colors } = useContext(ThemeContext);

    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <HeaderWrapper>
            <Sidebar visible={sidebarVisible} />

            <HeaderContainer className="headerContainer">
                <Image className="logoImage" src={path_Logo} width="60px" link="/" />

                <HeaderNavigation className="headerNavWrapper">
                    <NavList className="headerNav">
                        <NavItem className="navItem">Início</NavItem>
                        <NavItem className="navItem" onClick={() => (setSidebarVisible(!sidebarVisible))}>Contato</NavItem>
                        <NavItem className="navItem themeSwitcher">
                            <Switch
                                onChange={toggleTheme}
                                checked={title === 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                offColor={shade(0.15, colors.basePrimary)}
                                onColor={colors.baseSecondary}
                            />
                        </NavItem>
                    </NavList>
                </HeaderNavigation>


            </HeaderContainer>
        </HeaderWrapper>
    );

}

export default Header;