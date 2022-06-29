import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: `'Be Vietnam Pro', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    colors: {
        primary: {
            background: "#080f18",
            foreground: "#dbe1e8",
        },
        secondary: {
            background: "#0e162b",
            foreground: "#ccd9dc",
        },
    },
    components: {
        Text: {
            baseStyle: {
                color: "secondary.foreground",
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: "primary.background",
                color: "primary.foreground",
            },
        },
    },
    config: {
        initialColorMode: "dark",
    },
});
