import { Box, Flex, Text } from "@chakra-ui/react";

interface SectionTopicProps {
  section: string;
  topic: string;
}

export const SectionTopic = ({ section, topic }: SectionTopicProps) => {
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
