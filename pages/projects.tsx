import type { NextPage } from "next";
import { Container, Heading, Text } from "@chakra-ui/react";

import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";

const Projects: NextPage = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="1230px" marginY="24px">
                <PageTransition>
                    <Heading>Projects</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                </PageTransition>
            </Container>
        </>
    );
};

export default Projects;
