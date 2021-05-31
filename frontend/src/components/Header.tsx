import NextLink from 'next/link'
import { Flex, Box, Link, HStack, Button } from "@chakra-ui/react";
import Container from './Container';
import Image from '../components/Image';

const Header = () => {
  return (
    <Flex
    as="header"
    w="100%"
    h="64px"
    bg="#F6F6F6"
    justifyContent="center"
    position="fixed"
    top="0"
    left="0"
    zIndex="9999"
    >
      <Container py="2">
        <Flex
          flexDir="row"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w={{ base: '100px', lg: "100px" }}>
            <NextLink href="/" passHref>
              <Link _focus={{ outline: 'none'}}>
                <Image
                  src="/logo-pages.svg"
                  alt="Logo AppJusto"
                  width="100%"
                  loading="eager"
                />
              </Link>
              </NextLink>
          </Box>
          <HStack spacing={8} alignItems="center">
            <Link
              fontSize="16px"
              lineHeight="22px"
              fontWeight="700"
              _focus={{ outline: 'none'}}
              href="https://admin.appjusto.com.br"
              isExternal
            >
              Cadastrar restaurante
            </Link>
            <Link
              fontSize="16px"
              lineHeight="22px"
              fontWeight="500"
              _focus={{ outline: 'none'}}
              href="https://appjusto.freshdesk.com/support/home"
              isExternal
            >
              Tirar dúvidas sobre o AppJusto
            </Link>
            <Link
              _focus={{ outline: 'none'}}
              href="https://admin.appjusto.com.br/app"
              isExternal
            >
              <Button
                minH="48px"
                variant="outline"
                fontFamily="barlow"
                fontSize="16px"
                fontWeight="500"
                borderColor="black"
              >
                Acessar portal do restaurante
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Header;
