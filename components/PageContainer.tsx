import { ReactNode } from "react";
import Head from "next/head";
import { Container, chakra } from "@chakra-ui/react";

import PageTransition from "./PageTransition";

const ChakraMain = chakra(chakra.div);

export default function PageContainer({ title, children }: { title: string; children: ReactNode }) {
    return (
        <ChakraMain>
            <Head>
                <title>{title}</title>
            </Head>
            <Container maxWidth="1130px" marginY="24px">
                <PageTransition>{children}</PageTransition>
            </Container>
        </ChakraMain>
    );
}
