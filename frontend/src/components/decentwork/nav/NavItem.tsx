import { Box, Center, Text } from "@chakra-ui/react";
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
    if (window.scrollY > offsetTop + height) pro = 100;
    else if (window.scrollY > offsetTop) {
      pro = (100 * (window.scrollY - offsetTop)) / height;
    }
    setProgress(pro);
  }, [to]);
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <Center w="100%" flexDir="column">
      <ScrollLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        name={name}
        width="100%"
        // href="/"
      >
        <Text
          display={{ base: "none", md: "initial" }}
          color="white"
          cursor="pointer"
        >
          {`${label} ${emoji}`}
        </Text>
        <Text
          display={{ base: "initial", md: "none" }}
          color="white"
          cursor="pointer"
        >
          {emoji}
        </Text>
      </ScrollLink>
      <Box w="100%">
        <Box w={`${progress}%`} h="4px" bgColor="primary" />
      </Box>
    </Center>
  );
};
