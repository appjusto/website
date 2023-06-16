import { Center, Text } from "@chakra-ui/react";
import React from "react";

interface IndicatorBoxProps {
  title: string;
  description: string;
}

export const IndicatorBox: React.FC<IndicatorBoxProps> = ({
  title,
  description,
}) => {
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
      <Text fontSize="4xl" fontWeight="700" lineHeight="3rem" color="body">
        {title}
      </Text>
      <Text textAlign="center">{description}</Text>
    </Center>
  );
};
