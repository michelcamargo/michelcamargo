import React from "react";
import {Package, Connect as BaseConnect, MergePackages, Frontity} from "frontity/types";
import Router from "@frontity/router/types";
import Source from "@frontity/source/types";
import Html2React from "@frontity/html2react/types";

interface CamargoTheme extends Package {
    name: "camargo-theme";
    roots: {
        theme: React.FC;
    };
    state: {
        theme: {
            autoPrefetch: string,
            menu: Array<{name: string, link: string}>,
            isMobileMenuOpen: boolean,
            featured: {
                showOnList: boolean,
                showOnPost: boolean
            },
            counter: number
        };
    };
    actions: {
        theme: {
            toggleMobileMenu: ({state}) => void,
            closeMobileMenu: ({state}) => void,
            increaseCounter: ({state}) => void
        };
    };
}

export default CamargoTheme;

export type Packages = MergePackages<
    Frontity,
    Router,
    Source,
    Html2React,
    CamargoTheme
    >;

type Connect<Props extends object = {}> = BaseConnect<Packages, Props>;

export { Connect };