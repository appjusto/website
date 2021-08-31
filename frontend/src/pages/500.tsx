import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ServerError() {
  return (
    <Center w="100vw" h="100vh">
      <Flex flexDir="column" alignItems="center">
        <Box w="140px">
          <Image src="/logo-pages.svg" alt="Logo AppJusto" ignoreFallback />
        </Box>
        <Text
          mt="6"
          fontSize="24px"
          fontWeight="700"
          lineHeight="26px"
        >
          Ocorreu um erro em nosso servidor =/
        </Text>
        <NextLink href="/" passHref>
          <Link
            mt="6"
            fontSize="16px"
            fontWeight="500"
            lineHeight="21px"
            textDecor="underline"
            _focus={{ outline: 'none'}}
          >
            Voltar para página inicial
          </Link>
        </NextLink>
      </Flex>
    </Center>
  )
}
