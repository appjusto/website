import Image from 'next/image'
import { Flex, Box, Heading, Stack } from "@chakra-ui/react";

interface ItemProps {
  image: string
  altImg: string
  title: string
  ods?: boolean
}

const Item: React.FC<ItemProps> = ({ 
    image, altImg, title, ods = false 
  }) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      mb="16px"
    >
      <Flex
        flexDir="row"
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
      >
        <Box
          w="20px"
          h="20px"
          mr="16px"
        >
          <Image src={image} width={30} height={30} alt={altImg}/>
        </Box>
        <Heading 
          as="h4"
          fontSize="20px"
          lineHeight="26px"
          fontWeight="500"
          color="#697667" 
        >
          {title}
        </Heading>
      </Flex>
      {
        ods && (
          <Stack direction="row" spacing={2} w="100%" mt="16px" pl="36px">
            <Box 
              borderRadius="4px" 
              overflow="hidden"
              maxW="64px"
              h="64px"
              >
              <Image src="/ods8.svg" alt="ODS8" width={64} height={64} quality={100}/>
            </Box>
            <Box 
              borderRadius="4px" 
              overflow="hidden"
              maxW="64px"
              h="64px"
              >
              <Image src="/ods10.svg" alt="ODS10" width={64} height={64} quality={100}/>
            </Box>
            <Box 
              borderRadius="4px" 
              overflow="hidden"
              maxW="64px"
              h="64px"
              >
              <Image src="/ods11.svg" alt="ODS11" width={64} height={64} quality={100}/>
            </Box>
            <Box 
              borderRadius="4px" 
              overflow="hidden"
              maxW="64px"
              h="64px"
              >
              <Image src="/ods17.svg" alt="ODS17" width={64} height={64} quality={100}/>
            </Box>
          </Stack>
        )
      }
    </Flex>
  );
}

export default Item;