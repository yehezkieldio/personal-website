import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../utils/theme";

function PortfolioApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <ChakraProvider resetCSS theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </AnimatePresence>
        </>
    );
}

export default PortfolioApp;
