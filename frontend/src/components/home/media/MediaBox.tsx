import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

interface MediaBoxProps {
  image: string;
  altImg: string;
  link?: string;
  text: string;
}

const MediaBox: React.FC<MediaBoxProps> = ({ image, altImg, link, text }) => {
  return (
    <Link
      href={link}
      _hover={{ textDecor: "none" }}
      _focus={{ outline: "none" }}
      isExternal
    >
      <Flex
        position="relative"
        bgColor="#F6F6F6"
        borderRadius="8px"
        minW="312px"
        maxW="312px"
        h="400px"
        p="6"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Box pos="relative" h="40px">
            <Image src="/icon-quote.svg" alt="áspas verdes" />
          </Box>
          <Box mt="4" h="180px">
            <Text
              fontSize="24px"
              fontWeight="500"
              fontStyle="italic"
              lineHeight="30px"
            >
              {text}
            </Text>
          </Box>
        </Box>
        <Box pos="relative" h="90px">
          <Image src={image} alt={altImg} />
        </Box>
      </Flex>
    </Link>
  );
};

export default MediaBox;
