import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'

interface NumberBoxProps {
  icon: string
  number: number
  label: string
}

const NumberBox: React.FC<NumberBoxProps> = ({ icon, number, label }) => {
  return (
    <Flex 
      w="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt="22px"
    >
      <Image src={icon} width={24} height={24} />
      <Text
        fontFamily="Barlow"
        fontSize="40px"
        fontWeight="700"
        h="auto"
      >
        +{number}
      </Text>
      <Text textStyle="p" opacity="0.6">
        {label}
      </Text>
    </Flex>
  );
}

export default NumberBox;