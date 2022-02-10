import React from 'react';

import './styles.css';
import { Link } from "react-router-dom";

class NavigationComponent extends React.Component {

    private navigationElements: Array<JSX.Element> = [];

    private NAV_MOCK: Array<{label: string, path: string}> = [
        {
            label: "Início",
            path: "/"
        },
        {
            label: "Trabalho",
            path: "/work"
        }
    ];

    private setNavigation() {
        if(this.navigationElements.length === 0) {
            this.NAV_MOCK.forEach((item) => {
                this.navigationElements.push(<li className={"header-nav__item"}><Link to={item.path}>{item.label}</Link></li>);
            })
        }
    }

    render() {
        this.setNavigation();

        return(
            <nav className={"header-nav__container"}>
                <ul className={"header-nav__list"}>
                    {this.navigationElements}
                </ul>
            </nav>
        )
    }

}

export default NavigationComponent;