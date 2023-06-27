import { Center, Text } from "@chakra-ui/react";

interface IndicatorBoxProps {
  title: string;
  description: string;
}

export const IndicatorBox = ({ title, description }: IndicatorBoxProps) => {
  return (
    <Center
      h="164px"
      w={{ base: "320px", md: "100%" }}
      p="4"
      // minW="355px"
      flexDir="column"
      border="1px solid"
      borderColor="green.400"
      borderRadius="lg"
    >
      <Text fontSize="4xl" fontWeight="semibold">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </Center>
  );
};
