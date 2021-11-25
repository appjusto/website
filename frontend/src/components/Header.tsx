import NextLink from 'next/link'
import { Flex, Box, Link, Icon, Image, HStack, Button, CloseButton, useDisclosure, Collapse, VStack  } from "@chakra-ui/react";
import Container from './Container';
import { FaFacebookSquare, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import CustomLink from './CustomLink'
import { usePageContext } from '../context';

const Header = () => {
  // context
  const { setShowAppsModal  } = usePageContext()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex
      as="header"
      w="100%"
      bg="white"
      flexDir="column"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
    >
      <Container py="2">
        <Flex
          flexDir="row"
          w='100%'
          maxH="64px"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box display={{base: 'block', lg: 'none'}}>
              {
                isOpen ? <CloseButton onClick={onToggle} /> : (
                  <Button border="none" px="1" bg="#F6F6F6" onClick={onToggle} aria-label="Menu">
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
                  <Link _focus={{ outline: 'none'}} w={{ base: '96px', lg: "96px" }}>
                    <Image
                      src="/logo-pages.svg"
                      alt="Logo AppJusto"
                      width="100%"
                      ignoreFallback
                    />
                  </Link>
                </NextLink>
              )
            }
          </HStack>
          <Flex
            flexDir="row"
            w={{base: '50%', md: '100%'}}
            maxH="64px"
            justifyContent={{md: 'flex-end', lg: 'space-between'}}
            alignItems="center"
            fontFamily="barlow"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="700"
          >
            <HStack
              ml="8"
              spacing={8}
              display={{base: 'none', lg: 'block'}}
              align="center"
            >
              <Button
                w="124px"
                variant="primary"
                onClick={() => setShowAppsModal(true)}
              >
                Baixar App
              </Button>
              <Link
                _focus={{ outline: 'none'}}
                href="https://admin.appjusto.com.br"
                isExternal
              >
                Cadastrar restaurante
              </Link>
              <NextLink  href="/investimento-coletivo" passHref>
                <Link
                  _focus={{ outline: 'none'}}
                >
                  Sobre o investimento coletivo
                </Link>
              </NextLink>
              <Link
                _focus={{ outline: 'none'}}
                href="https://appjusto.freshdesk.com/support/home"
                isExternal
              >
                Tirar dúvidas
              </Link>
            </HStack>
            <Link
              display={{base: 'none', md: 'block'}}
              _focus={{ outline: 'none'}}
              href="https://admin.appjusto.com.br/app"
              isExternal
            >
              <Button
                minH="48px"
                w="260px"
                variant="outline"
                fontWeight="500"
                borderColor="black"
              >
                Acessar portal do restaurante
              </Button>
            </Link>
          </Flex>
          <Button
            display={{base: 'block', md: 'none'}}
            maxW="130px"
            variant="primary"
            onClick={() => setShowAppsModal(true)}
          >
            Baixar App
          </Button>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="#F6F6F6"
          w="100%"
          pt="6"
          px="6"
          pb="20"
          fontSize="16px"
          lineHeight="22px"
          fontWeight="700"
        >
          <VStack spacing={10} alignItems="flex-start">
            <Link
              _focus={{ outline: 'none'}}
              href="https://admin.appjusto.com.br"
              isExternal
            >
              Cadastrar restaurante
            </Link>
            <NextLink  href="/investimento-coletivo" passHref>
                <Link
                  _focus={{ outline: 'none'}}
                >
                  Sobre o investimento coletivo
                </Link>
              </NextLink>
            <Link
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
                fontWeight="500"
                borderColor="black"
              >
                Acessar portal do restaurante
              </Button>
            </Link>
            <HStack spacing={4}>
              <CustomLink
                name="go_to_linkedin_header"
                link="https://www.linkedin.com/company/appjusto/"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Linkedin do Appjusto"
              >
                <Icon as={FaLinkedin}
                  w="20px"
                  h="20px"
                />
              </CustomLink>
              <CustomLink
                name="go_to_facebook_header"
                link="https://www.facebook.com/appjusto"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Facebook do Appjusto"
              >
                <Icon as={FaFacebookSquare}
                  w="20px"
                  h="20px"
                />
              </CustomLink>
              <CustomLink
                name="go_to_instagram_header"
                link="https://www.instagram.com/appjusto/"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Instagram do Appjusto"
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
