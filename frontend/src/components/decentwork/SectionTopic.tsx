import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface SectionTopicProps {
  section: string;
  topic: string;
}

export const SectionTopic: React.FC<SectionTopicProps> = ({
  section,
  topic,
}) => {
  return (
    <Box ml="6" maxW="420">
      <Flex flexDir="row">
        <Box w="4px" h="17px" bgColor="primary" borderRadius="lg" mr="2" />
        <Text fontSize="sm" lineHeight="1rem">
          {section}
        </Text>
      </Flex>
      <Text fontSize="3xl" lineHeight="3rem">
        {topic}
      </Text>
    </Box>
  );
};
