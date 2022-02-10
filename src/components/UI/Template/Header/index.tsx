import React from 'react';

export default (): JSX.Element => {
    return (
        <div className={"header__wrapper"}>
            <div className={"container header__container"}>
                <img className={"header__mainLogo"} alt={"Michel Camargo"} src={"assets/svg/common/logo.svg"} />
            </div>
        </div>
    )
}