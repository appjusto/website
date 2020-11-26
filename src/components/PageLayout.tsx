import Head from 'next/head'
import NextLink from 'next/link'
import { Flex, Stack, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { MdFiberManualRecord as Dot  } from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import Container from "./Container";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ShareFooter from './ShareFooter';
import Section from './Section';

interface PageProps {
  pageName: string
  logo: string
}

const PageLayout: React.FC<PageProps> = ({
  pageName, 
  logo,  
  children
}) => {
  return (
    <>
      <Head>
        <title>AppJusto | {pageName}</title>
      </Head>
      {
        pageName !== "Home" && (
          <Flex
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            position="relative"
            h="48px"
            display={["flex", null, null, "none"]}
          >
            <NextLink href="/" passHref>
              <Link 
                position="absolute"
                left="16px"
                border="1px solid #F2F6EA"
                borderRadius="8px"
                minW="32px"
                h="32px"
                textAlign="center"
                _hover={{textDecoration: "underline"}}
              >
                <Icon as={BiArrowBack}
                  mt="2px" 
                  w="16px"
                  h="16px"
                />
              </Link>
            </NextLink>
            <Heading 
              as="h2"
              fontSize="16px"
              lineHeight="22px"
              fontWeight="500"  
            >
              {pageName}
            </Heading>
        </Flex>
        )
      }
      <Header 
        logo={logo} 
        logoW={pageName !== "Home" ? "120px" : "140px" }
        logoH={pageName !== "Home" ? "52px" : "60px" }
        isHome={pageName === "Home"}
        top={pageName === "Home" ? "0" : "48px"}
      />
      <Main>
        <Section>
        {
          pageName !== "Home" && (
            <Container 
              flexDir="column"
              m="124px 0 64px"
            >
              <Stack 
                direction="row"
                spacing={2}
                display={[ "none", null, null, "flex"]}
                color="#697667"
                fontSize="16px"
                lineHeight="22px"
              >
                <NextLink href="/" passHref>
                  <Link 
                    _hover={{textDecoration: "underline"}}
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
          )
        }
        {children}
        </Section>
      </Main>
      <Footer />
      {
        pageName === "Home" && (
          <ShareFooter />
        )
      }
    </>
  );
}

export default PageLayout;