import React from "react";
import HeaderTemplate from "./Header";
import FooterTemplate from "./Footer";

type TemplateProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}:TemplateProps): JSX.Element => {
    return (
            <div className={"base"}>
                <HeaderTemplate/>
                <div className={"container"}>{children}</div>
                <FooterTemplate/>
            </div>
    );
}