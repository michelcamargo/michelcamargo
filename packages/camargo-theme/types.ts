import React from "react";
import { Package, Connect as BaseConnect, MergePackages, Frontity } from "frontity/types";
import Router from "@frontity/router/types";
import Source from "@frontity/source/types";
import Html2React from "@frontity/html2react/types";
import type Schema from "./src/styles/schema"

interface Theme extends Package {
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
            isDarkTheme: boolean
        };
        styles: Schema
    };
    actions: {
        theme: {
            toggleMobileMenu: ({state}) => void,
            closeMobileMenu: ({state}) => void,
            toggleTheme: ({state}) => void
        };
    };
}

export default Theme;

export type Packages = MergePackages<
    Frontity,
    Router,
    Source,
    Html2React,
    Theme
    >;

type Connect<Props extends object = {}> = BaseConnect<Packages, Props>;

export { Connect };