import { Button, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface SectionButtonProps {
  to: string;
  label: string;
}

export const SectionButton: React.FC<SectionButtonProps> = ({ to, label }) => {
  return (
    <WrapItem>
      <ScrollLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        name="scroll to top"
        href="/"
      >
        <Button variant="white" fontWeight="500" minW="135px">
          {label}
        </Button>
      </ScrollLink>
    </WrapItem>
  );
};