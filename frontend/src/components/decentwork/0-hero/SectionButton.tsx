import { Button, WrapItem } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

interface SectionButtonProps {
  to: string;
  label: string;
}

export const SectionButton = ({ to, label }: SectionButtonProps) => {
  return (
    <WrapItem>
      <ScrollLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        name="scroll to top"
        // href="/"
      >
        <Button variant="white" fontWeight="500" minW="135px">
          {label}
        </Button>
      </ScrollLink>
    </WrapItem>
  );
};
