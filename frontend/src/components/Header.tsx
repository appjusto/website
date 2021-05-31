import NextLink from 'next/link'
import { Flex, Box, Link, Icon, HStack, Button, CloseButton, useDisclosure, Collapse, VStack  } from "@chakra-ui/react";
import Container from './Container';
import Image from '../components/Image';
import { FaFacebookSquare, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import CustomLink from './CustomLink'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  console.log(isOpen);
  return (
    <Flex
    as="header"
    w="100%"
    bg="#F6F6F6"
    flexDir="column"
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
          h="64px"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box display={{base: 'block', lg: 'none'}}>
              {
                isOpen ? <CloseButton onClick={onToggle} /> : (
                  <Button border="none" px="1" bg="#F6F6F6" onClick={onToggle}>
                    <VStack spacing={1}>
                      <Box bg="black" h="2px" w="20px"/>
                      <Box bg="black" h="2px" w="20px"/>
                      <Box bg="black" h="2px" w="20px"/>
                    </VStack>
                  </Button>
                )
              }
            </Box>
            {
              !isOpen && (
                <NextLink href="/" passHref>
                  <Link _focus={{ outline: 'none'}} w={{ base: '100px', lg: "100px" }}>
                    <Image
                      src="/logo-pages.svg"
                      alt="Logo AppJusto"
                      width="100%"
                      loading="eager"
                    />
                  </Link>
                </NextLink>
              )
            }
          </HStack>
          <HStack
            spacing={8}
            //alignItems="flex-end"
            //justifyContent="flex-end"
            display={{base: 'none', lg: 'block'}}
            minW={{ lg: '712px'}}
          >
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
                w="260px"
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
          <Link
            display={{base: 'block', lg: 'none'}}
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
              Acessar portal
            </Button>
          </Link>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Box bg="#F6F6F6" w="100%" p="6">
          <VStack spacing={6} alignItems="flex-start">
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
            <HStack spacing={4}>
              <CustomLink
                name="go_to_linkedin_footer"
                link="https://www.linkedin.com/company/appjusto/"
                isExternal
                mr="28px"
                color="black"
              >
                <Icon as={FaLinkedin}
                  w="20px"
                  h="20px"
                />
              </CustomLink>
              <CustomLink
                name="go_to_facebook_footer"
                link="https://www.facebook.com/appjusto"
                isExternal
                mr="28px"
                color="black"
              >
                <Icon as={FaFacebookSquare}
                  w="20px"
                  h="20px"
                />
              </CustomLink>
              <CustomLink
                name="go_to_instagram_footer"
                link="https://www.instagram.com/appjusto/"
                isExternal
                mr="28px"
                color="black"
              >
                <Icon as={FaInstagram}
                  w="20px"
                  h="20px"
                />
              </CustomLink>
            </HStack>
          </VStack>
        </Box>
      </Collapse>
    </Flex>
  );
}

export default Header;
