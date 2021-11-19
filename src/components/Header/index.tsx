import React, {useState} from 'react';

import {HeaderWrapper, HeaderContainer} from './styles';
import Image from "../UI/Image";
import Sidebar from "../UI/Sidebar";
import Navbar from "../UI/Navbar";

const path_Logo = require("../../assets/svg/logo/michelcamargo.svg") as string;

interface HeaderProps {
    sticky?: boolean;
    toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <HeaderWrapper>
            <Sidebar visible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

            <HeaderContainer className="headerContainer">
                <Image className="logoImage" src={path_Logo} width="60px" link="/" />

                <Navbar sidebarStatus={sidebarVisible} sidebarHandler={setSidebarVisible} themeHandler={toggleTheme}/>
            </HeaderContainer>
        </HeaderWrapper>
    );

}

export default Header;