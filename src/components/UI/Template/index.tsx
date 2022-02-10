import React from "react";

import HeaderTemplate from "./Header";
import FooterTemplate from "./Footer";

import "./styles.css";

type TemplateProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}:TemplateProps): JSX.Element => {
    return (
        <>
            <HeaderTemplate/>
            <div className={"view__content"}>{children}</div>
            <FooterTemplate/>
        </>
    );
}