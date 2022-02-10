import React from "react";
import HeaderTemplate from "./Header";
import FooterTemplate from "./Footer";

type TemplateProps = {
    children?: JSX.Element | JSX.Element[];
}

export default ({children}:TemplateProps): JSX.Element => {
    return (
            <div>
                <HeaderTemplate/>
                <div className={""}>{children}</div>
                <FooterTemplate/>
            </div>
    );
}