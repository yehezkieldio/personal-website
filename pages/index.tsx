import type { NextPage } from "next";
import { Container, Heading, Text } from "@chakra-ui/react";

import Navigation from "../components/Navigation";

const Home: NextPage = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="1230px" marginY="24px">
                <Heading>Hello, world.</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Container>
        </>
    );
};

export default Home;
