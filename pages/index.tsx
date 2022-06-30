import type { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/react";

import PageContainer from "../components/PageContainer";

const Index: NextPage = () => {
    return (
        <PageContainer title="yehezkieldio">
            <Heading>Index</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sequi tempore magnam.</Text>
        </PageContainer>
    );
};

export default Index;
