import { Flex, Image, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import Section from "../../components/Section";

export const AppsBox = () => {
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
            Baixe o app e comece a fazer suas entregas!
          </Text>
          <HStack mt="8" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-courier-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="/icon-play-store.png"
              iconAlt="ícone play store"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-courier-ios"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="16px"
              icon="/icon-apple.png"
              iconAlt="ícone apple store"
              link="#"
              isExternal={false}
              isDisabled
            />
          </HStack>
          <Link
            mt="6"
            href="https://appjusto.freshdesk.com/support/home"
            textDecor="underline"
            fontWeight="500"
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
