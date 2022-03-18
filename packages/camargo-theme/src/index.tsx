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
        /**
         * State is where the packages store their default settings and other
         * relevant state. It is scoped to the `theme` namespace.
         */
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

    /**
     * Actions are functions that modify the state or deal with other parts of theme.
     */
    actions: {
        theme: {
            toggleMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = false;
            },
            increaseCounter: ({ state }) => {
                state.theme.counter++;
                console.log("counter: ", state.theme.counter);
            }
        },
    },
    libraries: {
        html2react: {
            /**
             * Add a processor to `html2react` so it processes the `<img>` tags
             * and internal link inside the content HTML.
             * You can add your own processors too.
             */
            processors: [image, iframe, link],
        },
    },
};

export default camargoTheme;


