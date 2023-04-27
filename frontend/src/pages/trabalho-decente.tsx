import PageLayout from "../components/PageLayout";
import Head from "next/head";
import Seo from "../components/Seo";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Section from "src/components/Section";
import Container from "src/components/Container";

export default function DecentWorkPage() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="O AppJusto, como forma de aprimorar seu combate à precarização do trabalho pelas plataformas, está trabalhando na luta pelo trabalho decente. Elencamos as ações que estamos fazendo e que ainda iremos fazer baseada nos seguintes critérios: remuneração, contratos, gestão, condições e representações justas."
          title="AppJusto e trabalho decente"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Trabalho decente">
        <Section id="hero" overflow="hidden">
          <Container maxW="1040px">
            <Flex
              mt={{ base: "60px", md: "200px", lg: "120px" }}
              justifyContent="space-between"
            >
              <Box maxW={{ base: "100%", md: "600px", lg: "740px" }}>
                <Heading
                  as="h1"
                  maxW={{ base: "311px", md: "480px", lg: "648px" }}
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="700"
                  lineHeight={{ base: "2.6rem", md: "3.5rem", lg: "4.75rem" }}
                >
                  AppJusto na luta pelo trabalho decente
                </Heading>
                <Heading
                  mt="8"
                  as="h2"
                  maxW="648px"
                  fontSize="xl"
                  lineHeight="1.62rem"
                  fontWeight="500"
                >
                  O AppJusto, como forma de aprimorar seu combate à precarização
                  do trabalho pelas plataformas, está trabalhando na luta pelo
                  trabalho decente. Elencamos as ações que estamos fazendo e que
                  ainda iremos fazer baseada nos seguintes critérios:
                  remuneração, contratos, gestão, condições e representações
                  justas.
                </Heading>
              </Box>
              <Box pl="8">
                <Image
                  src="/app_courier.jpg"
                  alt="tela do app de entregadores"
                  width="320px"
                />
              </Box>
            </Flex>
          </Container>
        </Section>
      </PageLayout>
    </>
  );
}
