import Theme from "../types";
import App from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

import darkTheme from "./styles/themes/dark"
import lightTheme from "./styles/themes/light"

const camargoTheme: Theme = {
    name: "camargo-theme",
    roots: {
        theme: App,
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
            isDarkTheme: false
        },
        styles: lightTheme
    },
    actions: {
        theme: {
            toggleMobileMenu: ({ state }): void => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({ state }): void => {
                state.theme.isMobileMenuOpen = false;
            },
            toggleTheme: ({ state }): void => {
                state.styles = state.styles.title === 'light' ? darkTheme : lightTheme;
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


