import { Box, Flex, Icon, LayoutProps, Text } from "@chakra-ui/react";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "./Container";
import Link from "./CustomLink";
import ShareFooter from "./ShareFooter";

interface FooterProps {
  sharing?: boolean;
  containerMaxWidth?: LayoutProps["w"];
}

const Footer: React.FC<FooterProps> = ({
  sharing = true,
  containerMaxWidth = "1460px",
}) => {
  return (
    <Box>
      <Flex
        as="footer"
        id="page-footer"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bg="black"
        textDecoration="underline"
      >
        <Container
          pt="32px"
          pb={{ base: "9px", md: "32px" }}
          display="flex"
          flexDir="column"
          maxW={containerMaxWidth}
        >
          <Flex
            w="100%"
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              w="100%"
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={{ base: "50px", md: "50px", lg: "0" }}
            >
              <Flex
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                color="white"
                mb={{ base: "22px", lg: "0" }}
                display={{ base: "block", lg: "none" }}
              >
                <Link
                  name="go_to_linkedin_footer"
                  link="https://www.linkedin.com/company/appjusto/"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Linkedin do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaLinkedin} w="20px" h="20px" />
                </Link>
                <Link
                  name="go_to_facebook_footer"
                  link="https://www.facebook.com/appjusto"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Facebook do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaFacebookSquare} w="20px" h="20px" />
                </Link>
                <Link
                  name="go_to_instagram_footer"
                  link="https://www.instagram.com/appjusto/"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Instagram do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaInstagram} w="20px" h="20px" />
                </Link>
              </Flex>
              <Flex
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                color="white"
                mb={{ base: "22px", lg: "0" }}
                mr={{ base: "0", lg: "26px" }}
              >
                <Icon
                  as={MdMailOutline}
                  color="primary"
                  mr="12px"
                  w="20px"
                  h="20px"
                />
                <Link
                  name="contact_footer"
                  link="mailto:contato@appjusto.com.br"
                  linkLabel="contato@appjusto.com.br"
                  isExternal
                  fontSize="md"
                  _hover={{ color: "#055AFF" }}
                />
              </Flex>
              <Flex
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                color="white"
                mb={{ base: "26px", lg: "0" }}
                display={{ base: "none", lg: "block" }}
              >
                <Link
                  name="go_to_linkedin_footer"
                  link="https://www.linkedin.com/company/appjusto/"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Linkedin do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaLinkedin} w="20px" h="20px" />
                </Link>
                <Link
                  name="go_to_facebook_footer"
                  link="https://www.facebook.com/appjusto"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Facebook do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaFacebookSquare} w="20px" h="20px" />
                </Link>
                <Link
                  name="go_to_instagram_footer"
                  link="https://www.instagram.com/appjusto/"
                  isExternal
                  mr="28px"
                  color="primary"
                  aria-label="Link para a página do Instagram do Appjusto"
                  _hover={{ color: "#055AFF" }}
                >
                  <Icon as={FaInstagram} w="20px" h="20px" />
                </Link>
              </Flex>
            </Flex>
            <Flex
              w="100%"
              m="0"
              p="0"
              flexDir={{ base: "column", lg: "row" }}
              justifyContent={{ base: "flex-start", lg: "flex-end" }}
              alignItems={{ base: "flex-start", lg: "flex-end" }}
              color="white"
            >
              <Link
                name="freshdesk_footer"
                link="https://appjusto.freshdesk.com/"
                linkLabel="Perguntas frequentes"
                mb={{ base: "12px", lg: "0" }}
                fontSize="1rem"
                _hover={{ color: "#055AFF" }}
              />
              <Link
                name="terms_footer"
                link="https://github.com/appjusto/docs/blob/main/legal/politica-de-privacidade.md"
                linkLabel="Política de Privacidade"
                ml={{ base: "0", lg: "6" }}
                mb={{ base: "12px", lg: "0" }}
                fontSize="1rem"
                _hover={{ color: "#055AFF" }}
              />
            </Flex>
          </Flex>
          <Box w="100%" mt="1" textAlign={{ base: "start", lg: "end" }}>
            <Text color="white" fontSize="sm" lineHeight="1.125rem">
              JUSTO TECNOLOGIA E INOVAÇÃO SOCIAL LTDA - CNPJ:38.447.139/0001-50
            </Text>
          </Box>
        </Container>
      </Flex>
      {sharing && <ShareFooter />}
    </Box>
  );
};

export default Footer;
