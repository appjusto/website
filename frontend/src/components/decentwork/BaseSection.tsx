import Container from "@/components/Container";
import Section from "@/components/Section";
import { FlexProps } from "@chakra-ui/react";

interface BaseSectionProps extends FlexProps {
  id: string;
}

export const BaseSection = ({ id, children, ...props }: BaseSectionProps) => {
  return (
    <Section
      id={id}
      minH="100vh"
      pb={{ base: "", md: "", lg: "12" }}
      {...props}
    >
      <Container minH="100vh">{children}</Container>
    </Section>
  );
};
