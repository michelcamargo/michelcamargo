import React from "react";
import {Package, Connect as BaseConnect, MergePackages, Frontity} from "frontity/types";
import Router from "@frontity/router/types";
import Source from "@frontity/source/types";
import Html2React from "@frontity/html2react/types";
// import MarsThemeTypeScript from "@frontity/mars-theme-typescript/types";

interface CamargoTheme extends Package {
    name: "camargo-theme";
    roots: {
        theme: React.FC;
    };
    state: {
        theme: {};
    };
    actions: {
        theme: {};
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