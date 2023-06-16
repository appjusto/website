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
      flexDir="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="552">
        <Image
          src={`/dw/dw-section${1}.png`}
          alt={`section ${sectionNumber}`}
        />
      </Box>
      <Box ml="6" maxW="420">
        <Heading as="h3" fontSize="5xl" lineHeight="5.4rem">
          {title}
        </Heading>
        {description}
      </Box>
    </Flex>
  );
};
