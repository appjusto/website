import { Flex, Icon, Text } from '@chakra-ui/react'
import { MdMailOutline  } from 'react-icons/md'
import { FaFacebookSquare, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import Container from './Container'
import Link from './CustomLink'
import ShareFooter from './ShareFooter'

const Footer: React.FC = () => {
  return (
    <>
      <Flex
        as="footer"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bg="black"
        fontFamily="Barlow"
        textDecoration="underline"
      >
        <Container
          p={["33px 0 9px", null, null, "32px 0 96px"]}
          display="flex"
          flexDir={["column", null, null, "row"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            w="100%"
            m="0"
            p="0"
            flexDir={["column", null, null, "row"]}
            justifyContent="flex-start"
            alignItems="flex-start"
            mb={["50px", "50px", "50px", "0"]}
          >
            <Flex
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              color="white"
              mb={["22px", null, null, "0"]}
              display={["block", null, null, "none"]}
            >
              <Link
                name="go_to_linkedin_footer"
                link="https://www.linkedin.com/company/appjusto/"
                isExternal
                mr="28px"
                color="primary"
              >
                <Icon as={FaLinkedin}
                  w="20px"
                  h="20px"
                />
              </Link>
              <Link
                name="go_to_facebook_footer"
                link="https://www.facebook.com/appjusto"
                isExternal
                mr="28px"
                color="primary"
              >
                <Icon as={FaFacebookSquare}
                  w="20px"
                  h="20px"
                />
              </Link>
              <Link
                name="go_to_instagram_footer"
                link="https://www.instagram.com/appjusto/"
                isExternal
                mr="28px"
                color="primary"
              >
                <Icon as={FaInstagram}
                  w="20px"
                  h="20px"
                />
              </Link>
            </Flex>
            <Flex
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              color="white"
              mb={["22px", null, null, "0"]}
              mr={["0", null, null, "26px"]}
            >
              <Icon as={MdMailOutline}
                color="primary"
                mr="12px"
                w="20px"
                h="20px"
              />
              <Link
                name="contact_footer"
                link="mailto:contato@appjusto.com.br"
                linkLabel="contato@appjusto.com.br"
                internal={false}
              />
            </Flex>
            <Flex
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              color="white"
              mb={["26px", null, null, "0"]}
              display={["none", null, null, "block"]}
            >
              <Link
                name="go_to_linkedin_footer"
                link="https://www.linkedin.com/company/appjusto/"
                isExternal
                mr="28px"
                color="primary"
                aria-label="Link para a página do Linkedin do Appjusto"
              >
                <Icon as={FaLinkedin}
                  w="20px"
                  h="20px"
                />
              </Link>
              <Link
                name="go_to_facebook_footer"
                link="https://www.facebook.com/appjusto"
                isExternal
                mr="28px"
                color="primary"
                aria-label="Link para a página do Facebook do Appjusto"
              >
                <Icon as={FaFacebookSquare}
                  w="20px"
                  h="20px"
                />
              </Link>
              <Link
                name="go_to_instagram_footer"
                link="https://www.instagram.com/appjusto/"
                isExternal
                mr="28px"
                color="primary"
                aria-label="Link para a página do Instagram do Appjusto"
              >
                <Icon as={FaInstagram}
                  w="20px"
                  h="20px"
                />
              </Link>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            m="0"
            p="0"
            flexDir={["column", null, null, "row"]}
            justifyContent={["flex-start", null, null, "flex-end"]}
            alignItems={["flex-start", null, null, "flex-end"]}
            color="white"
          >
            <Link
              name="terms_footer"
              link="https://github.com/appjusto/docs/blob/main/legal/termo-tratamento-de-dados.md"
              linkLabel="Termos de uso"
              mb={["22px", null, null, "0"]}
              fontSize="15px"
              mr={["0", null, null, "16px"]}
            />
            <Text
              mb={["22px", null, null, "0"]}
              fontSize="15px"
              >
              © {new Date().getFullYear()} AppJusto. Marca Registrada.
            </Text>
          </Flex>
        </Container>
      </Flex>
      <ShareFooter />
    </>
  );
}

export default Footer;
