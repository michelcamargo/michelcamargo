import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        containerWidth: string,
        shadow: string,
        transition: string,
        colors: {
            mono: {
                white: string,
                light: string,
                medium: string,
                dark: string,
                black: string
            },
            basePrimary: string,
            basePrimary__inverted: string,
            baseSecondary: string,
            baseSecondary__inverted: string,
            accent: string,
            backgroundPrimary: string,
            backgroundSecondary: string,
            backgroundAlternative: string,
            textPrimary: string,
            textPrimary__inverted: string,
            textSecondary: string,
            textSecondary__inverted: string,
            anchor: string,
            anchor__inverted: string
        },
        fontFamily: {
            base: string,
            heading: string,
            aux: string
        },
        fontSize: {
            smallest: string,
            smaller: string,
            small: string,
            medium: string,
            large: string,
            larger: string,
            largest: string
        },
        spacing: {
            smaller: string,
            small: string,
            medium: string,
            large: string,
            larger: string,
            largest: string
        }
        borderRadius: {
            small: string,
            medium: string,
            large: string,
            rounded: string
        }
    }
}

