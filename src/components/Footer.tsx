import { Flex, Icon, Text } from '@chakra-ui/react'
import { MdMailOutline  } from 'react-icons/md'
import { FaFacebookSquare, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import Container from './Container'
import Link from './CustomLink'

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      p={["33px 0 9px", null, null, "42px 0"]}
      justifyContent="center"
      alignItems="center"
      bg="black"
      fontFamily="Barlow"
      textDecoration="underline"
    >
      <Container
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
              aria-label="Conheça nossa página no Linkedin"
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
              aria-label="Conheça nossa página no Facebook"
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
              aria-label="Conheça nossa página no Instagram"
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
            name="policy_footer"
            link="/politica-de-privacidade"
            linkLabel="Política de privacidade"
            internal={true}
            mb={["22px", null, null, "0"]}
            fontSize="15px"
            mr={["0", null, null, "16px"]}
          />
          <Link
            name="terms_footer"
            link="/termos-de-uso"
            linkLabel="Termos de uso"
            internal={true}
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
  );
}

export default Footer;
