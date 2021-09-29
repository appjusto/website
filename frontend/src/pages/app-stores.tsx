import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from 'next/link';
import CustomLinkButton from "../components/CustomLinkButton";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

export default function LinkConfirmation() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
          canonical_url="https://appjusto.com.br/"
        />
      </Head>
      <Box>
        <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
          <Box maxW="752px" px="4">
            <Flex justifyContent="center">
              <NextLink href="/" passHref>
                <Link _focus={{ outline: 'none'}} w='120px'>
                  <Image
                    src="/logo-pages.svg"
                    alt="Logo AppJusto"
                    width="100%"
                  />
                </Link>
              </NextLink>
            </Flex>
            <Text
              mt="8"
              fontFamily="barlow"
              fontSize="24px"
              fontWeight="700"
              lineHeight="26px"
              textAlign="center"
            >
              Você está há um passo de uma economia de plataforma mais justa!
            </Text>
            <Text
              mt="8"
              fontFamily="barlow"
              fontSize="16px"
              fontWeight="500"
              lineHeight="22px"
              textAlign="center"
            >
              Escolha a loja que corresponde ao seu smartphone e faça o download!
            </Text>
            <Text
              mt="6"
              fontFamily="barlow"
              fontSize="16px"
              fontWeight="500"
              lineHeight="22px"
              textAlign="center"
            >
              Obrigado por fazer parte desse movimento!
            </Text>
            <Flex mt="10" justifyContent="center">
              <HStack w="100%" maxW="360px" spacing={4}>
                <CustomLinkButton
                  mt="0"
                  w={{base: '100%', lg: '160px'}}
                  name="app-consumer-android"
                  linkLabel="Android"
                  variant="primary"
                  fontSize="16px"
                  icon="icon-play-store.png"
                  iconAlt="ícone play store"
                  link="https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live"
                  isExternal
                />
                <CustomLinkButton
                  mt="0"
                  w={{base: '100%', lg: '160px'}}
                  name="app-consumer-ios"
                  linkLabel="iPhone"
                  variant="primary"
                  fontSize="16px"
                  icon="icon-apple-black.png"
                  iconAlt="ícone apple store"
                  link="https://apps.apple.com/br/app/appjusto/id1569067601"
                  isExternal
                />
            </HStack>
            </Flex>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}
