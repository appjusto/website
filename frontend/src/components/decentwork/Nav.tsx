import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export const Nav = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [activeOffset, setActiveOffset] = React.useState(0);

  const navRef = React.useRef(null);

  React.useEffect(() => {
    if (!navRef.current) {
      return;
    }
    setActiveOffset(navRef.current.offsetTop);
  }, [navRef, setActiveOffset]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) {
        return;
      }

      const shouldBeSticky = window.scrollY > activeOffset - 64;
      setIsActive(shouldBeSticky);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsActive, navRef, activeOffset]);
  return (
    <Flex
      ref={navRef}
      w="100vw"
      color="white"
      bgColor="gray.700"
      // justifyContent="space-between"
      top={isActive ? "64px" : "unset"}
      position={isActive ? "fixed" : "relative"}
      opacity={isActive ? 1 : 0}
      transition="opacity 0.2s, transform 0.3s"
      zIndex="modal"
    >
      <Center w="100%">
        <ScrollLink
          activeClass="active"
          to="dw-1-remuneration"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          name="scroll to remuneration"
          width="100%"
          // href="/"
        >
          <Text color="inherit" cursor="pointer">
            Remuneração
          </Text>
        </ScrollLink>
      </Center>
      <Center w="100%">
        <ScrollLink
          activeClass="active"
          to="dw-2-conditions"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          name="scroll to conditions"
          // href="/"
        >
          <Text color="inherit" cursor="pointer">
            Condições
          </Text>
        </ScrollLink>
      </Center>
      <Center w="100%">
        <ScrollLink
          activeClass="active"
          to="dw-3-contracts"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          name="scroll to contracts"
          // href="/"
        >
          <Text color="inherit" cursor="pointer">
            Contratos
          </Text>
        </ScrollLink>
      </Center>
      <Center w="100%">
        <ScrollLink
          activeClass="active"
          to="dw-4-management"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          name="scroll to management"
          // href="/"
        >
          <Text color="inherit" cursor="pointer">
            Gestão
          </Text>
        </ScrollLink>
      </Center>
      <Center w="100%">
        <ScrollLink
          activeClass="active"
          to="dw-5-representations"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          name="scroll to representations"
          // href="/"
        >
          <Text color="inherit" cursor="pointer">
            Representações
          </Text>
        </ScrollLink>
      </Center>
    </Flex>
  );
};
