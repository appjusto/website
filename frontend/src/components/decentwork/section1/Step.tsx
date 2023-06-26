import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface StepProps {
  step: number;
  body: string;
  attached?: boolean;
}

export const Step: React.FC<StepProps> = ({ step, body, attached = true }) => {
  return (
    <Box
      position="relative"
      w="100%"
      pl="6"
      pb="6"
      borderLeft={attached ? "1px solid" : "none"}
      borderColor="gray.400"
    >
      <Box
        position="absolute"
        w="18px"
        h="18px"
        top="0"
        left="-9px"
        bgColor="green.500"
        borderRadius="full"
      />
      <Text fontWeight="semibold" lineHeight="1rem" mb="0.6rem">
        Passo 0{step}
      </Text>
      <Text>{body}</Text>
    </Box>
  );
};
