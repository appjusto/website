import { Box, Flex, Text } from "@chakra-ui/react";

interface SectionTopicProps {
  section: string;
  topic: string;
  color?: string;
}

export const SectionTopic = ({ section, topic, color }: SectionTopicProps) => {
  return (
    <Box>
      <Flex flexDir="row">
        <Box w="4px" h="17px" bgColor="primary" borderRadius="lg" mr="2" />
        <Text fontSize="sm" color={color ?? "body"}>
          {section}
        </Text>
      </Flex>
      <Text
        mt="2"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="semibold"
        color={color ?? "body"}
      >
        {topic}
      </Text>
    </Box>
  );
};
