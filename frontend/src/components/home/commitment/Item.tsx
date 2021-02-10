import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import Image from '../../Image'

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
          <Image src={image} alt={altImg} />
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
          <Box w="100%" mt="16px" pl="36px">
            <Image src="/ods.png" alt="ODS" />
          </Box>
        )
      }
    </Flex>
  );
}

export default Item;
