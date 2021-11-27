import React, {useState} from 'react';

import {HeaderWrapper, HeaderContainer} from './styles';
import Sidebar from "../UI/Sidebar";
import Navbar from "../UI/Navbar";
import { ReactComponent as MainLogo } from "../../assets/svg/logo/michelcamargo.svg";

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
                <MainLogo width={40} height={40} />
                <Navbar sidebarStatus={sidebarVisible} sidebarHandler={setSidebarVisible} themeHandler={toggleTheme}/>
            </HeaderContainer>
        </HeaderWrapper>
    );

}

export default Header;