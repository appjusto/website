import { Box, Center, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface NavItemProps {
  name: string;
  to: string;
  label: string;
  emoji: string;
}

export const NavItem = ({ name, to, label, emoji }: NavItemProps) => {
  const [progress, setProgress] = React.useState(0);
  const onScroll = React.useCallback(() => {
    const section = document.getElementById(to);
    if (!section) return;
    const offsetTop = section.offsetTop;
    const height = section.clientHeight;
    let pro = 0;
    if (window.scrollY >= offsetTop + height) pro = 100;
    else if (window.scrollY > offsetTop) {
      pro = (100 * (window.scrollY - offsetTop)) / height;
      if (100 - pro < 4) pro = 100;
    }
    setProgress(pro);
  }, [to]);
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <Center
      position="relative"
      w="100%"
      flexDir="column"
      _hover={{ bgColor: "green.100" }}
    >
      <Link
        as={ScrollLink}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        name={name}
        width="full"
        h="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // href="/"
      >
        <Text
          as="span"
          fontSize="md"
          display={{ base: "none", lg: "inline-block" }}
        >
          {`${label} ${emoji}`}
        </Text>
        <Text
          as="span"
          fontSize="md"
          display={{ base: "inline-block", lg: "none" }}
        >
          {emoji}
        </Text>
      </Link>
      <Box w="100%" position="absolute" bottom="-4px">
        <Box w={`${progress}%`} h="4px" bgColor="primary" />
      </Box>
    </Center>
  );
};
