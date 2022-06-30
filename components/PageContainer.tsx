import { ReactNode } from "react";
import Head from "next/head";
import { Container, chakra } from "@chakra-ui/react";

import Navigation from "./Navigation";
import PageTransition from "./PageTransition";
import Footer from "./Footer";

const ChakraMain = chakra(chakra.div);

export default function PageContainer({ title, children }: { title: string; children: ReactNode }) {
    return (
        <ChakraMain>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <Container maxWidth="1130px" marginY="24px">
                <PageTransition>{children}</PageTransition>
            </Container>
            <Footer />
        </ChakraMain>
    );
}
