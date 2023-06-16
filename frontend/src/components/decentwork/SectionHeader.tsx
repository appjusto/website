import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

interface SectionHeaderProps {
  sectionNumber: number;
  title: string;
  description: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  title,
  description,
}) => {
  return (
    <Flex
      w="full"
      py="12"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="552">
        <Image
          ml={{ base: "-6", lg: "0" }}
          src={`/dw/section${1}.png`}
          alt={`section ${sectionNumber}`}
        />
      </Box>
      <Box maxW="420" ml={{ base: "0", lg: "6" }}>
        <Heading
          as="h3"
          fontSize={{ base: "3xl", lg: "5xl" }}
          lineHeight="5.4rem"
        >
          {title}
        </Heading>
        {description}
      </Box>
    </Flex>
  );
};
