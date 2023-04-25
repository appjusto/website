import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Complement, WithId } from "../../types";
import React from "react";

interface ComplementItemProps {
  complement: WithId<Complement>;
}

export const ComplementItem = ({ complement }: ComplementItemProps) => {
  // UI
  return (
    <Flex
      w="100%"
      py="3"
      justifyContent="space-between"
      borderTop="1px solid #F6F6F6"
    >
      <Box maxW={{ base: "228px", lg: "400px" }}>
        <Text fontSize="md">{complement.name}</Text>
        <Text mt="1" color="#697667" fontSize="sm" lineHeight="1.125rem">
          {complement?.description ?? "N/I"}
        </Text>
        <Text mt="1" fontSize="md">
          {formatCurrency(complement?.price ?? 0)}
        </Text>
      </Box>
    </Flex>
  );
};
