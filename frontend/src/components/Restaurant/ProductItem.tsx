import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Product, WithId } from "../../types";

interface ProductItemProps {
  product: WithId<Product>;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Flex w="100%" py="3" justifyContent="space-between" borderTop="1px solid #F6F6F6">
      <Box maxW={{base: '228px', lg: '400px'}}>
        <Text fontSize="15px" lineHeight="21px" fontWeight="500">
          {product.name}
        </Text>
        <Text mt="1" color="#697667" fontSize="13px" lineHeight="18px" fontWeight="500">
          {product.description}
        </Text>
        <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
          {formatCurrency(product.price)}
        </Text>
      </Box>
      <Box w="80px" h="80px" bgColor="#F6F6F6" borderRadius="lg">

      </Box>
    </Flex>
  )
}
