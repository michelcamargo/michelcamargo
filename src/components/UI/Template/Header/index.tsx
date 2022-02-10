import React from 'react';

import NavigationComponent from "../Navigation";

import { ReactComponent as MainLogo } from "../../../../assets/svg/common/logo.svg"
import './styles.css';

class HeaderComponent extends React.Component {

    render() {
        return(
            <div className={"header__wrapper"}>
                <div className={"container header__container"}>
                    <MainLogo className={"header__mainLogo"} />
                    <NavigationComponent />
                </div>
            </div>
        )
    }

}

export default HeaderComponent;