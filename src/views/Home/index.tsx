import React from 'react';
import "./styles.css";

import PresentationComponent from "./components/Presentation";
import Goals from "./components/Goals";

type HomeProps = {

}

export default ({}: HomeProps): JSX.Element => {
    return (
        <div className={"home__wrapper"}>
            <PresentationComponent/>
            <Goals/>
        </div>
    )
}