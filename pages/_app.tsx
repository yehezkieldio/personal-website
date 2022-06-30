import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../utils/theme";

function PortfolioApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false,
                retry: false,
                staleTime: 1000 * 60 * 60 * 24,
            },
        },
    });

    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <ChakraProvider resetCSS theme={theme}>
                    <QueryClientProvider client={queryClient}>
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </ChakraProvider>
            </AnimatePresence>
        </>
    );
}

export default PortfolioApp;
