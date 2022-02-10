import React from 'react';

import NavigationComponent from "../Navigation";

import { ReactComponent as MainLogo } from "../../../../assets/svg/common/logo.svg"
import './styles.css';
import {Link} from "react-router-dom";

class HeaderComponent extends React.Component {

    render() {
        return(
            <div className={"header__wrapper"}>
                <div className={"container header__container"}>
                    <Link className={"header__logoLink"} to={"/"}><MainLogo className={"header__mainLogo"} /></Link>
                    <NavigationComponent />
                </div>
            </div>
        )
    }

}

export default HeaderComponent;