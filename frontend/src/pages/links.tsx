import Head from "next/head";
import Seo from '../components/Seo';
import { Box, Button, Center, Container, Image, Link, VStack } from "@chakra-ui/react";
import HeaderLinks from "../components/HeaderLinks";
import { usePageContext } from "../context";


export default function Links() {
  // context
  const { storeLink } = usePageContext();
  // UI
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
      <Center mt={{base: '8', md: '10'}} w="100vw" h="100vh" >
        <Container
          maxW="414px"
          fontFamily="barlow"
          fontWeight="700"
        >
          <VStack spacing={6} w="100%">
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href="https://admin.appjusto.com.br/"
              isExternal
            >
              <Button
                w="100%"
                variant="tertiary"
                fontSize="16px"
                borderColor="black"
              >
                  Quero cadastrar meu restaurante
              </Button>
            </Link>
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            >
              <Button
                w="100%"
                variant="secondary"
                fontSize="16px"
                borderColor="black"
              >
                  Quero me cadastrar como entregador
              </Button>
            </Link>
            <Link
              w="100%"
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href={storeLink}
              isExternal
            >
              <Button
                w="100%"
                variant="primary"
                fontSize="16px"
                borderColor="black"
              >
                  Sou consumidor e quero baixar o App
              </Button>
            </Link>
            <Box>
              <Image src="/circle-players@2x.jpeg" />
            </Box>
          </VStack>
        </Container>
      </Center>
    </>
  )
}
