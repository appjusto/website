import Image from 'next/image'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'

interface InfoBoxProps{
  image: string
  title: string
  text: string
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, title, text }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      p="24px"
      border="1px solid #F2F6EA"
      borderRadius="8px"
      minW="320px"
    >
      <Box
        position="relative"
        w="96px"
        h="96px"
        border="2px solid black"
        borderRadius="48px"
      >
        <Image src={image} width={96} height={96} />
      </Box>
      <Heading 
        as="h3"
        fontSize="24px"
        lineHeight="30px"
        p="16px 0"
      >
        {title}
      </Heading>
      <Text
        textAlign="center"
        fontSize="18px"
        lineHeight="26px"
      >
        {text}
      </Text>
    </Flex>
  );
}

export default InfoBox;