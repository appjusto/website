import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { NextLink } from "src/components/NextLink";

export default function LinkConfirmation() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
      </Head>
      <Box>
        <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
          <Box maxW="752px">
            <Flex justifyContent="center">
              <NextLink href="/" _focus={{ outline: "none" }} w="120px">
                <Image src="/logo-pages.svg" alt="Logo AppJusto" width="100%" />
              </NextLink>
            </Flex>
            <Text
              mt="8"
              fontSize="2xl"
              fontWeight="700"
              lineHeight="1.5rem"
              textAlign="center"
            >
              Você precisa acessar o link usando o seu celular.
            </Text>
            <Text mt="8" fontSize="1rem" lineHeight="1.5rem" textAlign="center">
              Dessa forma, o AppJusto consegue identificar automaticamente o seu
              cadastro no aplicativo instalado. Acesse seu e-mail usando o seu
              celular, e clique novamente no link para continuar o acesso.
            </Text>
            <Text mt="6" fontSize="1rem" lineHeight="1.5rem" textAlign="center">
              Obrigado por fazer parte desse movimento por uma economia mais
              justa para todos!
            </Text>
            <Flex mt="6" justifyContent="center">
              <Image src="/icon-intro-delivery.svg" w="140px" />
            </Flex>
          </Box>
        </Flex>
        <Footer sharing={false} />
      </Box>
    </>
  );
}
