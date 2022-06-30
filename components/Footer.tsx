import { Box, Flex, Container, Text } from "@chakra-ui/react";

export default function Footer() {
    const currentDate = new Date();
    return (
        <Box>
            <Flex minHeight="80px" py={2} px={2} align="center" borderTop={1} borderStyle="solid" borderColor="#3B2C40">
                <Container maxWidth="1130px">
                    <Flex justify={{ base: "center", md: "center" }}>
                        <Text
                            textAlign={{ base: "center", md: "center" }}
                            fontFamily="heading"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            © {currentDate.getFullYear()} - <strong>Yehezkiel Dio.</strong> All Rights Reserved.
                        </Text>
                    </Flex>
                </Container>
            </Flex>
        </Box>
    );
}
