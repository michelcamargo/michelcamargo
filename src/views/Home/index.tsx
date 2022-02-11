import React from 'react';
import "./styles.css";

import PresentationComponent from "./components/Presentation";
import Goals from "./components/Goals";
import Portfolio from "./components/Portfolio";

type HomeProps = {

}

export default ({}: HomeProps): JSX.Element => {
    return (
        <div className={"home__wrapper"}>
            <PresentationComponent />
            <Goals />
            <Portfolio />
        </div>
    )
}