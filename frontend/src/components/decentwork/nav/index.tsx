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
      />
      <NavItem
        name="scroll-to-conditions"
        to="dw-2-conditions"
        label="Condições"
      />
      <NavItem
        name="scroll-to-contracts"
        to="dw-3-contracts"
        label="Contratos"
      />
      <NavItem
        name="scroll-to-management"
        to="dw-4-management"
        label="Gestão"
      />
      <NavItem
        name="scroll-to-representations"
        to="dw-5-representations"
        label="Representações"
      />
    </Flex>
  );
};
