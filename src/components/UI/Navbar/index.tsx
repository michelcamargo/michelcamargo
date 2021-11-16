import React, {useContext} from 'react';
import {NavigationWrapper, NavItem, NavLink, NavList} from "./styles";
import Switch from "react-switch";
import {shade} from "polished";
import {ThemeContext} from "styled-components";

interface NavigationProps {
    // children?: React.ReactNode | React.ReactNode[];
    sidebarStatus: boolean;
    sidebarHandler(status: boolean): void;
    themeHandler(): void;
}

const Navbar: React.FC<NavigationProps> = ({sidebarHandler, sidebarStatus, themeHandler}) => {
    const { title, colors } = useContext(ThemeContext);

    return (
        <NavigationWrapper className="headerNavWrapper">
            <NavList className="headerNav">
                <NavItem className="navItem" onClick={() => undefined}>
                    <NavLink>Início</NavLink>
                </NavItem>
                <NavItem className="navItem" onClick={() => undefined}>
                    <NavLink>Contato</NavLink>
                </NavItem>
                <NavItem className="navItem" onClick={() => (sidebarHandler(!sidebarStatus))}>
                    <NavLink>Disclaimer</NavLink>
                </NavItem>
                <NavItem className="navItem themeSwitcher">
                    <Switch
                        onChange={themeHandler}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={20}
                        width={40}
                        handleDiameter={25}
                        offColor={shade(0.15, colors.basePrimary)}
                        onColor={colors.baseSecondary}
                    />

                </NavItem>
            </NavList>
        </NavigationWrapper>
    );
}

export default Navbar