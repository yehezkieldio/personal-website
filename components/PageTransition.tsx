import { motion, isValidMotionProp } from "framer-motion";
import { ReactNode } from "react";
import { chakra } from "@chakra-ui/react";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const ChakraBox = chakra(motion.main, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <ChakraBox variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: "spring", stiffness: "80" }}>
            {children}
        </ChakraBox>
    );
}
