import type { NextPage } from "next";
import { Heading, Text, Box } from "@chakra-ui/react";

import PageContainer from "../components/PageContainer";

const Index: NextPage = () => {
    return (
        <PageContainer title="yehezkieldio">
            <Box maxWidth="820px" paddingTop="64px" paddingBottom="64px">
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                    Hello, I'm Yehezkiel Dio.
                </Text>
                <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight="shorter">
                    I am a web developer based in Balikpapan, Indonesia.
                </Heading>
                <Text fontSize={{ base: "xs", md: "md" }} lineHeight="tall" marginTop="8px">
                    Currently working on various projects online, while attending a vocational high school as a software
                    engineering major student.
                </Text>
            </Box>
        </PageContainer>
    );
};
export default Index;
