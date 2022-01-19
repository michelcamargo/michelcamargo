import React, {useContext, useState} from 'react';
import { ThemeContext } from 'styled-components'

import { HeaderWrapper, HeaderContainer, HeaderContent, HeaderLogo } from './styles';
import Sidebar from "../UI/Sidebar";
import Navbar from "../UI/Navbar";
import { ReactComponent as MainLogo } from "../../assets/svg/logo/michelcamargo.svg";

interface HeaderProps {
    sticky?: boolean;
    isFullWidth?: boolean;
    toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isFullWidth }) => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    let headerWrapperClass = "headerWrapper";
    let headerContainerClass = "headerContainer";
    let headerContentClass = "headerContent";

    const { colors } = useContext(ThemeContext);

    if(isFullWidth) {
        return (
            <HeaderWrapper className={headerWrapperClass}>
                <Sidebar visible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

                <HeaderContent className={headerContentClass}>
                    <HeaderLogo href={"/"}><MainLogo width={40} height={40} /></HeaderLogo>

                    <Navbar sidebarStatus={sidebarVisible} sidebarHandler={setSidebarVisible} themeHandler={toggleTheme}/>
                </HeaderContent>
            </HeaderWrapper>
        );
    } else {
        return (
            <HeaderWrapper className={headerWrapperClass}>
                <Sidebar visible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

                <HeaderContainer className={headerContainerClass}>
                    <HeaderContent className={headerContentClass}>
                        <HeaderLogo href={"/"}>
                            <MainLogo width={40} height={40} color={colors.primary} />
                        </HeaderLogo>
                        <Navbar sidebarStatus={sidebarVisible} sidebarHandler={setSidebarVisible} themeHandler={toggleTheme}/>
                    </HeaderContent>
                </HeaderContainer>
            </HeaderWrapper>
        );
    }

}

export default Header;