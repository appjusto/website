import Head from 'next/head'
import NextLink from 'next/link'
import { Flex, Stack, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { MdFiberManualRecord as Dot  } from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import Container from "./Container";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Section from './Section';
import { logoType } from './Header'

interface PageProps {
  pageName: string
}

const PageLayout: React.FC<PageProps> = ({
  pageName,
  children
}) => {
  const HeroShare = pageName === "Home" || pageName === "Restaurantes" || pageName === "Entregadores"
  return (
    <>
      <Head>
        <title>AppJusto | {pageName}</title>
      </Head>
      <Header hero={HeroShare} />
      <Main>
        {
          HeroShare ? children : (
            <Section>
              <Container
                flexDir="column"
                m="124px"
                mb="64px"
                display={[ "none", null, null, "flex"]}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  color="#697667"
                  fontSize="16px"
                  lineHeight="22px"
                >
                  <NextLink href="/" passHref>
                    <Link
                      _hover={{textDecoration: "underline"}}
                      _focus={{ outline: 'none '}}
                    >
                      Home
                    </Link>
                  </NextLink>
                  <Text>
                    <Icon as={Dot}
                      w="6px"
                      h="6px"
                    />
                  </Text>
                  <Text>{pageName}</Text>
                </Stack>
                <Heading
                  as="h1"
                  fontSize="56px"
                  lineHeight="67,2px"
                >
                  {pageName}
                </Heading>
              </Container>
              <Container
                mt={["100px", null, null, "0"]}
              >
                {children}
              </Container>
            </Section>
          )
        }
      </Main>
      <Footer pageName={pageName} />
    </>
  );
}

export default PageLayout;
