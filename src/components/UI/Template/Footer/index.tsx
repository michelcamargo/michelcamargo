import React from 'react';

import "./styles.css";

export default (): JSX.Element => {
    return (
        <div className={"footer__wrapper"}>
            <div className={"footer__container container"}>
                <div className={"footer__menuContainer"}>
                    <div className={"footer__menuContent"}>
                        <h6 className={"footer__menuHeading"}>Primeiro menu</h6>
                        <ul className={"footer__menuList"}>
                            <li className={"footer__menuItem"}>Item 1</li>
                            <li className={"footer__menuItem"}>Item 2</li>
                            <li className={"footer__menuItem"}>Item 3</li>
                        </ul>
                    </div>

                    <div className={"footer__menuContent"}>
                        <h6 className={"footer__menuHeading"}>Segundo menu</h6>
                        <ul className={"footer__menuList"}>
                            <li className={"footer__menuItem"}>Item 1</li>
                            <li className={"footer__menuItem"}>Item 2</li>
                            <li className={"footer__menuItem"}>Item 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}