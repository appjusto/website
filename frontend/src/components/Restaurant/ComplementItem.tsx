import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Complement, WithId } from "../../types";
import React from 'react';

interface ComplementItemProps {
  complement: WithId<Complement>;
}

export const ComplementItem = ({ complement }: ComplementItemProps) => {
  // UI
  return (
    <Flex w="100%" py="3" justifyContent="space-between" borderTop="1px solid #F6F6F6" cursor="pointer">
      <Box maxW={{base: '228px', lg: '400px'}}>
        <Text fontSize="15px" lineHeight="21px" fontWeight="500">
          {complement.name}
        </Text>
        <Text mt="1" color="#697667" fontSize="13px" lineHeight="18px" fontWeight="500">
          {complement.description}
        </Text>
        <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
          {formatCurrency(complement.price)}
        </Text>
      </Box>
    </Flex>
  )
}
