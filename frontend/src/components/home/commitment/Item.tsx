import { Flex, Box, Heading } from "@chakra-ui/react";
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
      mt="4"
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
          <Image src={image} alt={altImg} eagerLoading />
        </Box>
        <Heading
          as="h4"
          fontSize="18px"
          lineHeight="26px"
          fontWeight="500"
        >
          {title}
        </Heading>
      </Flex>
      {
        ods && (
          <Box w="100%" mt="16px" pl="36px">
            <Image src="/ods.png" alt="ODS" eagerLoading />
          </Box>
        )
      }
    </Flex>
  );
}

export default Item;
