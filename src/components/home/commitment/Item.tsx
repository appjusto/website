import Image from 'next/image'
import { Flex, Box, Heading, Stack, Text } from "@chakra-ui/react";
import Link from '../../CustomInternalLink'

interface ItemProps {
  image: string
  title: string
  text: string
  linkLabel?: string
  link?: string
  ods?: boolean
}

const Item: React.FC<ItemProps> = ({ 
    image, title, text, linkLabel, link, ods = false 
  }) => {
  return (
    <Flex
      flexDir="row"
      w="100%"
      mb="24px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="#F2F6EA"
        borderRadius="8px"
        minW="80px"
        h="80px"
        mr="16px"
      >
        <Image src={image} width={30} height={30} />
      </Flex>
      <Flex
        flexDir="column"
        mt="4px"
      >
        <Heading 
          as="h3"
          fontSize="20px"
          lineHeight="26px"
          fontWeight="500" 
        >
          {title}
        </Heading>
        <Text
          textStyle="p"
          fontSize="16px"
          lineHeight="22px"
          color="#697667" 
        >
          {text}
        </Text>
        {
          link && (
            <Link 
              link={link}
              linkLabel={linkLabel}
              fontSize="15px"
              lineHeight="22px"
              fontWeight="700"
            />
          )
        }
        {
          ods && (
            <Stack direction="row" spacing={2} w="100%" mt="16px">
              <Box 
                borderRadius="4px" 
                overflow="hidden"
                maxW="64px"
                h="64px"
                >
                <Image src="/ods8.svg" width={64} height={64} quality={100}/>
              </Box>
              <Box 
                borderRadius="4px" 
                overflow="hidden"
                maxW="64px"
                h="64px"
                >
                <Image src="/ods10.svg" width={64} height={64} quality={100}/>
              </Box>
              <Box 
                borderRadius="4px" 
                overflow="hidden"
                maxW="64px"
                h="64px"
                >
                <Image src="/ods11.svg" width={64} height={64} quality={100}/>
              </Box>
              <Box 
                borderRadius="4px" 
                overflow="hidden"
                maxW="64px"
                h="64px"
                >
                <Image src="/ods17.svg" width={64} height={64} quality={100}/>
              </Box>
            </Stack>
          )
        }
      </Flex>
    </Flex>
  );
}

export default Item;