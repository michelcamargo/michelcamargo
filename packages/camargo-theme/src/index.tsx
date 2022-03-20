import CamargoTheme from "../types";
import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const camargoTheme: CamargoTheme = {
    name: "camargo-theme",
    roots: {
        theme: Theme,
    },
    state: {
        theme: {
            autoPrefetch: "in-view",
            menu: [],
            isMobileMenuOpen: false,
            featured: {
                showOnList: false,
                showOnPost: false,
            },
            counter: 0
        },
    },
    actions: {
        theme: {
            toggleMobileMenu: ({ state }): void => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({ state }): void => {
                state.theme.isMobileMenuOpen = false;
            },
            increaseCounter: ({ state }): void => {
                state.theme.counter++;
                console.log("counter: ", state.theme.counter);
            }
        },
    },
    libraries: {
        html2react: {
            processors: [image, iframe, link],
        },
    },
};

export default camargoTheme;


