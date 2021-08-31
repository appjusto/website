import { Flex, Text } from "@chakra-ui/react";

interface FleetFeatureProps {
  type?: 'black' | 'gray';
  label: string;
  value: string;
}

export const FleetFeature = ({ type = 'black', label, value }: FleetFeatureProps) => {
  return (
    <Flex mt="3" justifyContent="space-between" alignItems="center">
      <Text
        fontSize="13px"
        lineHeight="18px"
        fontWeight="500"
        color={type === 'black' ? 'black' : '#697667'}
      >
        {label}
      </Text>
      <Text
        fontSize="13px"
        lineHeight="18px"
        fontWeight="500"
        color={type}
        bg={type === 'black' ? '' : '#F6F6F6'}
        border={type === 'black' ? '1px solid black' : 'none'}
        borderRadius="32px"
        px="2"
        py="1"
      >
        {value}
      </Text>
    </Flex>
  )
}
