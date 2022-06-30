import { Box, Flex, Stack, Text, Link as ChakraLink, IconButton, useDisclosure, Collapse, Container } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Navigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex minHeight="60px" py={2} px={2} align="center" borderBottom={1} borderStyle="solid" borderColor="#3B2C40">
                <Container>
                    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                        <Text textAlign={{ base: "center", md: "left" }} fontFamily="heading" fontWeight="600">
                            yehezkieldio
                        </Text>
                    </Flex>
                </Container>
                <Container>
                    <Flex display={{ base: "none", md: "flex" }} ml={10} justifyContent="right">
                        <DesktopNavigation />
                    </Flex>
                </Container>
                <Flex flex={{ base: 1, md: "auto" }} display={{ base: "flex", md: "none" }} justifyContent="right">
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant="ghost"
                        aria-label="toggle navigation"
                        _hover={{
                            background: "secondary.background",
                        }}
                        _active={{
                            background: "secondary.background",
                        }}
                    />
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNavigation />
            </Collapse>
        </Box>
    );
}

const DesktopNavigation = () => {
    return (
        <Stack direction="row" spacing={4}>
            {NAVIGATION_ITEMS.map((item: NavigationItem) => (
                <Box key={item.label}>
                    <NextLink href={item.href} passHref>
                        <ChakraLink p={2} fontSize="sm" fontFamily="heading" fontWeight="500" textTransform="lowercase">
                            {item.label}
                        </ChakraLink>
                    </NextLink>
                </Box>
            ))}
        </Stack>
    );
};

const MobileNavigation = () => {
    return (
        <Stack p={4} display={{ md: "none" }} borderBottom={1} borderStyle="solid" borderColor="#3B2C40" align="center">
            {NAVIGATION_ITEMS.map((item: NavigationItem) => (
                <MobileNavigationItem key={item.label} {...item} />
            ))}
        </Stack>
    );
};

const MobileNavigationItem = ({ label, href }: { label: string; href: string }) => {
    const { onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <NextLink href={href} passHref>
                <Flex as={ChakraLink} justify="space-between" align="center">
                    <Text p={2} fontSize="sm" fontFamily="heading" fontWeight="500" textTransform="lowercase">
                        {label}
                    </Text>
                </Flex>
            </NextLink>
        </Stack>
    );
};

interface NavigationItem {
    label: string;
    href: string;
}

const NAVIGATION_ITEMS: Array<NavigationItem> = [
    {
        label: "index",
        href: "/",
    },
    {
        label: "about",
        href: "/about",
    },
    {
        label: "projects",
        href: "/projects",
    },
    {
        label: "contact",
        href: "/contact",
    },
];
