import Head from "next/head";
import Seo from '../components/Seo';
import { Box, Button, Center, Container, Image, Link, VStack } from "@chakra-ui/react";
import HeaderLinks from "../components/HeaderLinks";


export default function Links() {
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink = env === 'live' ? 'https://login.appjusto.com.br/consumer/store' : `https://${env}.login.appjusto.com.br/consumer/store`;
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
          canonical_url="https://appjusto.com.br/"
        />
        <title>AppJusto | Links</title>
      </Head>
      <HeaderLinks />
      <Center mt={{base: '8'}} w="100vw" h="100vh" >
        <Container
          maxW="414px"
          fontFamily="barlow"
          fontWeight="700"
        >
          <VStack spacing={6} w="100%">
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              href="https://admin.appjusto.com.br/"
              isExternal
            >
              <Button
                variant="secondary"
                fontSize="16px"
                borderColor="black"
              >
                  Quero cadastrar meu restaurante
              </Button>
            </Link>
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              href="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            >
              <Button
                variant="tertiary"
                fontSize="16px"
                borderColor="black"
              >
                  Quero me cadastrar como entregador
              </Button>
            </Link>
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              href={storeLink}
              isExternal
            >
              <Button
                variant="primary"
                fontSize="16px"
                borderColor="black"
              >
                  Sou consumidor, quero baixar o App
              </Button>
            </Link>
            <Box>
              <Image src="/circle-players.jpeg" />
            </Box>
          </VStack>
        </Container>
      </Center>
    </>
  )
}
