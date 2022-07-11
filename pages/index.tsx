import type { NextPage } from "next";
import { Heading, Text, Box, Stack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

import { GoLocation } from "react-icons/go";
import { IoSchoolOutline, IoGitNetworkOutline, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

import PageContainer from "../components/PageContainer";

const Index: NextPage = () => {
    return (
        <PageContainer title="yehezkieldio -  web developer">
            <Box maxWidth="820px" paddingTop="64px" paddingBottom="64px">
                <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" letterSpacing="wide" lineHeight="shorter">
                    Yehezkiel Dio
                </Heading>
                <Text marginTop="8px" fontSize={{ base: "md", md: "2xl" }} fontWeight="normal">
                    web developer
                </Text>
                <Stack marginTop="44px" marginBottom="44px" spacing={4}>
                    <HStack>
                        <Icon as={GoLocation} w={6} h={6} />
                        <Text fontSize={{ base: "xs", md: "md" }} fontWeight="normal">
                            Balikpapan, Indonesia.
                        </Text>
                    </HStack>
                    <HStack>
                        <Icon as={IoSchoolOutline} w={6} h={6} />
                        <Text fontSize={{ base: "xs", md: "md" }} fontWeight="normal">
                            Studying Software Engineering at <strong>SMK Negeri 2 Balikpapan</strong>.
                        </Text>
                    </HStack>
                    <HStack>
                        <Icon as={IoGitNetworkOutline} w={6} h={6} />
                        <Text fontSize={{ base: "xs", md: "md" }} fontWeight="normal">
                            Freelance Web Developer
                        </Text>
                    </HStack>
                </Stack>
                <Stack marginTop="42px" marginBottom="42px" direction={{ md: "row" }}>
                    <HStack>
                        <Icon as={IoLogoGithub} w={{ base: 3, md: 6 }} h={{ base: 3, md: 6 }} />
                        <NextLink href="https://github.com/yehezkieldio" passHref>
                            <ChakraLink fontSize={{ base: "xs", md: "md" }}>GitHub</ChakraLink>
                        </NextLink>
                        <Icon as={IoLogoInstagram} w={{ base: 3, md: 6 }} h={{ base: 3, md: 6 }} />
                        <NextLink href="https://www.instagram.com/yhezkiel.dio/" passHref>
                            <ChakraLink fontSize={{ base: "xs", md: "md" }}>Instagram</ChakraLink>
                        </NextLink>
                        <Icon as={SiDiscord} w={{ base: 3, md: 6 }} h={{ base: 3, md: 6 }} />
                        <NextLink href="https://discord.com/users/327849142774923266" passHref>
                            <ChakraLink fontSize={{ base: "xs", md: "md" }}>Discord</ChakraLink>
                        </NextLink>
                    </HStack>
                </Stack>
            </Box>
        </PageContainer>
    );
};
export default Index;
