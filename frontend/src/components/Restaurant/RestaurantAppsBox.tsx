import { NextLink } from "@/components/NextLink";
import { Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import Container from "../Container";
import CustomLinkButton from "../CustomLinkButton";
import Section from "../Section";

export const RestaurantAppsBox = (props: FlexProps) => {
  // helpers
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const storeLink =
    env === "live"
      ? "https://login.appjusto.com.br/consumer/store"
      : `https://${env}.login.appjusto.com.br/consumer/store`;
  // UI
  return (
    <Section
      display="flex"
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "6", lg: "10" }}
      h="auto"
      zIndex="800"
      {...props}
    >
      <Container pt="0" display="flex" justifyContent="flex-end" maxW="1120px">
        <Box
          w="100%"
          maxW={{ lg: "366px" }}
          bg="white"
          border={{ base: "none", lg: "1px solid #C8D7CB" }}
          p={{ base: "0", lg: "8" }}
          color="black"
        >
          <Flex justifyContent="space-between">
            <NextLink href="/" _focus={{ outline: "none" }} w="120px">
              <Image src="/logo-pages.svg" alt="Logo AppJusto" w="100%" />
            </NextLink>
            <CustomLinkButton
              maxW="114px"
              name="app-consumer"
              linkLabel="Baixe o app"
              variant="primary"
              fontSize="md"
              link={storeLink}
              isExternal
            />
          </Flex>
          <Text
            display={{ base: "none", lg: "block" }}
            mt="6"
            fontSize="md"
            lineHeight="1.25rem"
          >
            Ao usar o AppJusto, você paga menos, e colabora com uma economia
            mais justa para entregadores e restaurantes. Faça parte desse
            movimento!
          </Text>
        </Box>
      </Container>
    </Section>
  );
};
