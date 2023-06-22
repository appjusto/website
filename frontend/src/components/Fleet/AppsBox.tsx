import Container from "@/components/Container";
import CustomLinkButton from "@/components/CustomLinkButton";
import Section from "@/components/Section";
import { Link } from "@chakra-ui/next-js";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";

export const AppsBox = () => {
  return (
    <Section
      display={{ base: "none", md: "flex" }}
      position={{ base: "relative", md: "fixed" }}
      top="10"
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end" maxW="1120px">
        <Flex
          flexDir="column"
          w="100%"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="8"
          color="black"
        >
          <Link href="/" _focus={{ outline: "none" }} w="94px">
            <Image src="/logo-pages.svg" alt="Logo AppJusto" width="120px" />
          </Link>
          <Text mt="8" fontSize="2xl" lineHeight="1.6rem" fontWeight="700">
            Baixe o app e comece a fazer suas entregas!
          </Text>
          <HStack mt="8" spacing={4}>
            <CustomLinkButton
              w="100%"
              name="app-courier-android"
              linkLabel="Android"
              variant="primary"
              fontSize="md"
              icon="/icon-play-store.png"
              iconAlt="ícone play store"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            />
            <CustomLinkButton
              w="100%"
              name="app-courier-ios"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="md"
              icon="/icon-apple.png"
              iconAlt="ícone apple store"
              link="/"
              isExternal
              isDisabled
            />
          </HStack>
          <Link
            mt="6"
            href="/"
            textDecor="underline"
            fontSize="md"
            fontWeight="500"
            _focus={{ outline: "none" }}
          >
            Saiba mais sobre o AppJusto
          </Link>
        </Flex>
      </Container>
    </Section>
  );
};
