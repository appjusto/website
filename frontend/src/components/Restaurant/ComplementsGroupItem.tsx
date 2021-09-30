import { Box, HStack, Text } from "@chakra-ui/react"
import { ComplementGroup, WithId } from "../../types"
import { ComplementItem } from "./ComplementItem"

interface ComplementsGroupItemProps {
  group: WithId<ComplementGroup>;
}

export const ComplementsGroupItem = ({ group }: ComplementsGroupItemProps) => {
  return (
    <Box mt="6">
      <HStack spacing={4} pb="4">
        <Box w="4px" h="24px" bgColor="#6CE787" borderRadius="lg"></Box>
        <Text fontSize="16px" lineHeight="22px" fontWeight="700">
          {group.name}
        </Text>
      </HStack>
      {
        group.items.map(complement => <ComplementItem key={complement.id} complement={complement} />)
      }
    </Box>
  )
}
