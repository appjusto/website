import { NextLink } from "@/components/NextLink";
import { Heading, Icon, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { MdFiberManualRecord as Dot } from "react-icons/md";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";

interface PageProps {
  pageName?: string;
}

const PageLayout: React.FC<PageProps> = ({ pageName, children }) => {
  // helpers
  const HeroShare =
    pageName && ["Home", "Restaurantes", "Trabalho decente"].includes(pageName);
  const titleToDisplay = React.useMemo(
    () => `AppJusto | ${pageName}`,
    [pageName]
  );
  // UI
  return (
    <>
      <Head>
        <title>{titleToDisplay}</title>
      </Head>
      <Header />
      <Main>
        {HeroShare ? (
          children
        ) : (
          <Section>
            <Container
              flexDir="column"
              m="64px"
              mb="64px"
              display={["none", null, null, "flex"]}
            >
              <Stack
                mt="4"
                direction="row"
                spacing={2}
                color="#697667"
                fontSize="16px"
                lineHeight="22px"
              >
                <NextLink
                  href="/"
                  _hover={{ textDecoration: "underline" }}
                  _focus={{ outline: "none " }}
                >
                  Home
                </NextLink>
                <Text>
                  <Icon as={Dot} w="6px" h="6px" />
                </Text>
                <Text>{pageName}</Text>
              </Stack>
              <Heading as="h1" fontSize="56px" lineHeight="67,2px">
                {pageName}
              </Heading>
            </Container>
            <Container mt={["100px", null, null, "0"]}>{children}</Container>
          </Section>
        )}
      </Main>
      <Footer sharing={pageName === "Home"} />
    </>
  );
};

export default PageLayout;
