import React from 'react';

import './styles.css';

export default (): JSX.Element => {
    return (
        <div className={"header__wrapper"}>
            <div className={"container header__container"}>
                <img className={"header__mainLogo"} alt={"Michel Camargo"} src={"assets/svg/common/logo.svg"} />
            </div>
        </div>
    )
}