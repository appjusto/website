import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function LinkConfirmation() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="160px">
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none'}} w={{ base: '100px', lg: "100px" }}>
            <Image
              src="/logo-pages.svg"
              alt="Logo AppJusto"
              width="100%"
            />
          </Link>
        </NextLink>
      </Box>
      <Text mt="8" fontFamily="barlow" fontSize="36px" fontWeight="500" lineHeight="30px">
        Use seu celular para acessar o link
      </Text>
      <Text mt="8" maxW="536px" fontFamily="barlow" fontSize="18px" fontWeight="500" lineHeight="26px" textAlign="center">
        Para que possamos confirmar a sua identidade diretamente no aplicativo,
        você precisa acessar o link usando o seu celular.
      </Text>
    </Flex>
  )
}
