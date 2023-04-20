import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import Seo from "../components/Seo";
import { NextLink } from "src/components/NextLink";

export default function ServerError() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
      </Head>
      <Center w="100vw" h="100vh">
        <Flex flexDir="column" alignItems="center">
          <Box w="140px">
            <Image src="/logo-pages.svg" alt="Logo AppJusto" ignoreFallback />
          </Box>
          <Text mt="6" fontSize="2xl" fontWeight="700" lineHeight="1.5rem">
            Ocorreu um erro em nosso servidor =/
          </Text>
          <NextLink
            mt="6"
            href="/"
            textDecor="underline"
            _focus={{ outline: "none" }}
          >
            Voltar para página inicial
          </NextLink>
        </Flex>
      </Center>
    </>
  );
}
