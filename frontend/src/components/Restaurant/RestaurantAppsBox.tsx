import { Flex, Image, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Container from "../Container";
import CustomLinkButton from "../CustomLinkButton";
import Section from "../Section";

export const RestaurantAppsBox = () => {
  return (
    <Section
      display={{base: 'none', md: 'flex'}}
      position={{ base: 'relative', md: 'fixed' }}
      top="10"
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Flex
          flexDir="column"
          w="100%"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="8"
          color="black"
        >
          <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none'}} w='94px'>
            <Image
              src="/logo-pages.svg"
              alt="Logo AppJusto"
              width="120px"
            />
          </Link>
        </NextLink>
          <Text mt="8" fontSize="24px" lineHeight="26px" fontWeight="700">
            Baixe o app e faça seu pedido!
          </Text>
          <HStack mt="6" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-consumer-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="/icon-play-store.png"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-consumer-ios"
              linkLabel="iPhone"
              variant="primary"
              fontSize="16px"
              icon="/icon-apple-black.png"
              link="https://apps.apple.com/br/app/appjusto/id1569067601"
              isExternal
            />
          </HStack>
          <Text mt="6" fontSize="15px" lineHeight="21px" fontWeight="500">
            Ao usar o AppJusto, você paga menos, e colabora com uma economia mais
            justa para entregadores e restaurantes. Faça parte desse movimento!
          </Text>
          <Link
            mt="6"
            href="https://appjusto.freshdesk.com/support/home"
            textDecor="underline"
            _focus={{ outline: 'none'}}
            isExternal
          >
            Saiba mais sobre o AppJusto
          </Link>
      </Flex>
    </Container>
  </Section>
  );
};
