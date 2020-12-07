import Image from 'next/image'
import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

interface HelpBoxProps {
  icon: string
  altImg: string
  title: string
  text: string
  isLast: boolean
}

const HelpBox: React.FC<HelpBoxProps> = ({
  icon,
  altImg,
  title,
  text,
  isLast, 
  children
}) => {
  return (
    <Flex 
      w="100%"
      minH="260px"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      mt="80px"
      p="20px 24px"
      bg="white"
      border="2px solid black"
      borderRadius="8px"
      mr={["0", null, null, `${isLast ? "0" : "16px"}`]}
    >
      <Flex
        w="90px"
        h="90px"
        border="2px solid black"
        borderRadius="45px"
        bg="white"
        alignItems="center"
        justifyContent="center"
        mt="-60px"
      >
        <Image src={icon} width={48} height={48} alt={altImg}/>
      </Flex>
      <Heading 
        as="h2"
        fontSize="24px"
        mt="16px"
      >
        {title}
      </Heading>
      <Text 
        textStyle="p" 
        textAlign="center"
        m="16px 0"
      >
        {text}
      </Text>
      <Stack
        direction="row"
        w="100%"
        spacing={3}
      >
        {children}
      </Stack>
    </Flex>
  );
}

export default HelpBox;