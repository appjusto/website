import { Box, HStack, Text } from "@chakra-ui/react";
import { Category, WithId } from "../../types";
import { ProductItem } from "./ProductItem";

interface CategoryItemProps {
  businessId: string;
  category: WithId<Category>;
}

export const CategoryItem = ({ businessId, category }: CategoryItemProps) => {
  return (
    <Box mt="6">
      <HStack ml="-16px" spacing={3} pb="4">
        <Box w="4px" h="24px" bgColor="#6CE787" borderRadius="lg"></Box>
        <Text fontSize="md" fontWeight="700">
          {category.name}
        </Text>
      </HStack>
      {category.items.map((product) => (
        <ProductItem
          key={product.id}
          businessId={businessId}
          product={product}
        />
      ))}
    </Box>
  );
};
