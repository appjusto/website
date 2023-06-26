import { Box, Flex, Text } from "@chakra-ui/react";
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
    <Box>
      <Flex flexDir="row">
        <Box w="4px" h="17px" bgColor="primary" borderRadius="lg" mr="2" />
        <Text fontSize="sm">{section}</Text>
      </Flex>
      <Text mt="2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="semibold">
        {topic}
      </Text>
    </Box>
  );
};
