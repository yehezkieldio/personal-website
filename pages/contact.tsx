import type { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/react";

import PageContainer from "../components/PageContainer";

const Contact: NextPage = () => {
    return (
        <PageContainer title="yehezkieldio">
            <Heading>Contact</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sequi tempore magnam.</Text>
        </PageContainer>
    );
};

export default Contact;
