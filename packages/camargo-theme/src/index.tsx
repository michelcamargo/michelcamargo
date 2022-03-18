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
            menu: [
                {
                    name: "Início",
                    link: "/"
                },
                {
                    name: "Contato",
                    link: "/contato"
                }
            ],
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


