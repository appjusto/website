import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavItem } from "./NavItem";

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
      if (!activeOffset) return;
      const shouldBeActive = window.scrollY > activeOffset - 80;
      setIsActive(shouldBeActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsActive, navRef, activeOffset]);
  return (
    <Flex
      ref={navRef}
      w="100%"
      h="60px"
      color="white"
      bgColor="green.50"
      borderTop="1px solid"
      borderColor="gray.50"
      top={isActive ? "64px" : "unset"}
      position={isActive ? "fixed" : "relative"}
      opacity={isActive ? 1 : 0}
      transition="opacity 0.2s, transform 0.3s"
      zIndex="modal"
    >
      <NavItem
        name="scroll-to-remuneration"
        to="dw-1-remuneration"
        label="Remuneração"
        emoji="🫰"
      />
      <NavItem
        name="scroll-to-conditions"
        to="dw-2-conditions"
        label="Condições"
        emoji="🛵"
      />
      <NavItem
        name="scroll-to-contracts"
        to="dw-3-contracts"
        label="Contratos"
        emoji="📃"
      />
      <NavItem
        name="scroll-to-management"
        to="dw-4-management"
        label="Gestão"
        emoji="💬"
      />
      <NavItem
        name="scroll-to-representations"
        to="dw-5-representations"
        label="Representações"
        emoji="✊"
      />
    </Flex>
  );
};
