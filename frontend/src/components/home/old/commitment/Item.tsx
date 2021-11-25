import { Flex, Box, Heading, Image } from "@chakra-ui/react";
interface ItemProps {
  image: string
  altImg: string
  title: string
}

const Item: React.FC<ItemProps> = ({
    image, altImg, title
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
          <Image src={image} alt={altImg} />
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
    </Flex>
  );
}

export default Item;
