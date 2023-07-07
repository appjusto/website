import Container from "@/components/Container";
import Section from "@/components/Section";
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Heading,
  Image,
} from "@chakra-ui/react";

interface RootProps extends FlexProps {
  id: string;
}

const Root = ({ id, children, ...props }: RootProps) => {
  return (
    <Section
      id={id}
      minH="100vh"
      pb={{ base: "", md: "", lg: "12" }}
      {...props}
    >
      <Container minH="100vh" pt={{ base: "0", md: "16", lg: "24" }}>
        {children}
      </Container>
    </Section>
  );
};

interface SectionHeaderProps {
  sectionNumber: number;
  title: string;
  description: React.ReactNode;
  color?: string;
}

export const Header = ({
  sectionNumber,
  title,
  description,
  color,
}: SectionHeaderProps) => {
  return (
    <Flex
      w="full"
      // py="8"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="552">
        <Image
          ml={{ base: "-6", lg: "0" }}
          src={`/dw/section${sectionNumber}.png`}
          alt={`section ${sectionNumber}`}
        />
      </Box>
      <Box maxW="420" ml={{ base: "0", lg: "6" }} mt={{ base: "4", md: "0" }}>
        <Heading
          as="h3"
          fontSize={{ base: "3xl", lg: "5xl" }}
          mb="4"
          color={color ?? "body"}
        >
          {title}
        </Heading>
        {description}
      </Box>
    </Flex>
  );
};

const Body = (props: BoxProps) => {
  return <Box mt={{ base: "16", md: "16", lg: "24" }} {...props} />;
};

export const BaseSection = {
  Root,
  Header,
  Body,
};
