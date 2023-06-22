import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  CloseButton,
  Collapse,
  Flex,
  HStack,
  Icon,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "./Container";
import CustomLink from "./CustomLink";

const HeaderLinks = () => {
  const { isOpen, onToggle } = useDisclosure();
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
          maxH="64px"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box display={{ base: "block", lg: "none" }}>
              {isOpen ? (
                <CloseButton onClick={onToggle} />
              ) : (
                <Button
                  border="none"
                  px="1"
                  bg="#F6F6F6"
                  onClick={onToggle}
                  aria-label="Menu"
                >
                  <VStack spacing={1}>
                    <Box bg="black" h="2px" w="20px" />
                    <Box bg="black" h="2px" w="20px" />
                    <Box bg="black" h="2px" w="20px" />
                  </VStack>
                </Button>
              )}
            </Box>
            {!isOpen && (
              <Link
                href="/"
                _focus={{ outline: "none" }}
                w={{ base: "100px", lg: "100px" }}
              >
                <Image
                  src="/logo-pages.svg"
                  alt="Logo AppJusto"
                  width="100%"
                  ignoreFallback
                />
              </Link>
            )}
          </HStack>
          {/*desktop*/}
          <Link
            href="/"
            display={{ base: "none", md: "block" }}
            _focus={{ outline: "none" }}
            fontWeight="700"
          >
            Saber mais sobre o AppJusto
          </Link>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <Box bg="#F6F6F6" w="100%" p="6">
          <VStack spacing={6} alignItems="flex-start">
            <Link
              href="/"
              fontSize="16px"
              lineHeight="22px"
              fontWeight="700"
              _focus={{ outline: "none" }}
            >
              Saber mais sobre o AppJusto
            </Link>
            <HStack spacing={4}>
              <CustomLink
                name="go_to_linkedin_header"
                href="https://www.linkedin.com/company/appjusto/"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Linkedin do Appjusto"
              >
                <Icon as={FaLinkedin} w="20px" h="20px" />
              </CustomLink>
              <CustomLink
                name="go_to_facebook_header"
                href="https://www.facebook.com/appjusto"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Facebook do Appjusto"
              >
                <Icon as={FaFacebookSquare} w="20px" h="20px" />
              </CustomLink>
              <CustomLink
                name="go_to_instagram_header"
                href="https://www.instagram.com/appjusto/"
                isExternal
                mr="28px"
                color="black"
                aria-label="Link para a página do Instagram do Appjusto"
              >
                <Icon as={FaInstagram} w="20px" h="20px" />
              </CustomLink>
            </HStack>
          </VStack>
        </Box>
      </Collapse>
    </Flex>
  );
};

export default HeaderLinks;
