import React from 'react';
import "./styles.css";

type HomeProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}: HomeProps): JSX.Element => {
    return (
        <div className={"home__wrapper"}>
            <h2 className={"home__mainTitle"}>Michel Camargo</h2>
            <div className={"home__mainContent"}>{children}</div>
        </div>
    )
}