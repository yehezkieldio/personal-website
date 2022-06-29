import type { NextPage } from "next";
import { Container, Heading, Text } from "@chakra-ui/react";

import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";

const About: NextPage = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="1230px" marginY="24px">
                <PageTransition>
                    <Heading>About</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                </PageTransition>
            </Container>
        </>
    );
};

export default About;
