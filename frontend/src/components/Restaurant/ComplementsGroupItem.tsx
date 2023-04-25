import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import { ComplementGroup, WithId } from "../../types";
import { ComplementItem } from "./ComplementItem";

interface ComplementsGroupItemProps {
  group: WithId<ComplementGroup>;
}

export const ComplementsGroupItem = ({ group }: ComplementsGroupItemProps) => {
  return (
    <Box mt="6">
      <HStack ml="-16px" spacing={3} pb="4">
        <Box w="4px" h="24px" bgColor="#6CE787" borderRadius="lg"></Box>
        <Text fontSize="md" fontWeight="700">
          {group.name}
        </Text>
      </HStack>
      <HStack>
        <Badge
          bgColor={group.required ? "#6CE787" : "#C8D7CB"}
          px="2"
          fontSize="xs"
          lineHeight="1.125rem"
          fontWeight="700"
        >
          {group.required ? "OBRIGATÓRIO" : "OPCIONAL"}
        </Badge>
        <Text fontSize="sm" lineHeight="1.125rem">
          {group.required
            ? `Escolha de ${group.minimum} até ${group.maximum} itens`
            : `Escolha até ${group.maximum} itens`}
        </Text>
      </HStack>
      {group.items.map((complement) => (
        <ComplementItem key={complement.id} complement={complement} />
      ))}
    </Box>
  );
};
