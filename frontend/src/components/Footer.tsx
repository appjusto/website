import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { MdMailOutline  } from 'react-icons/md'
import { FaFacebookSquare, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import Container from './Container'
import Link from './CustomLink'
import ShareFooter from './ShareFooter'

interface FooterProps {
  isHome: boolean;
}

const Footer: React.FC<FooterProps> = ({isHome}) => {
  return (
    <>
      <Flex
        as="footer"
        id="page-footer"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bg="black"
        fontFamily="Barlow"
        textDecoration="underline"
      >
        <Container
          pt="32px"
          pb={{base: '9px', md: '96px'}}
          display="flex"
          flexDir="column"
        >
          <Flex w="100%" flexDir={{base: 'column', lg: 'row'}} justifyContent="space-between" alignItems="center">
            <Flex
              w="100%"
              flexDir={{base:"column", lg: "row"}}
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={{base:"50px", md: "50px", lg: "0"}}
            >
              <Flex
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                color="white"
                mb={{base:"22px", lg: "0"}}
                display={{base:"block", lg: "none"}}
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
                mb={{base: "22px", lg: "0"}}
                mr={{base: "0", lg: "26px"}}
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
                mb={{base: "26px", lg: "0"}}
                display={{base: "none", lg: "block"}}
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
              flexDir={{base:"column", lg: "row"}}
              justifyContent={{base: "flex-start", lg: "flex-end"}}
              alignItems={{base: "flex-start", lg: "flex-end"}}
              color="white"
            >
              <Link
                name="terms_footer"
                link="https://github.com/appjusto/docs/blob/main/legal/termo-tratamento-de-dados.md"
                linkLabel="Termos de uso"
                mb={{base: "12px", lg: "0"}}
                fontSize="15px"
              />
            </Flex>
          </Flex>
          <Box w="100%" textAlign={{base: 'start', lg: 'end'}}>
            <Text color="white" fontSize="13px" lineHeight="18px">
              JUSTO TECNOLOGIA E INOVAÇÃO SOCIAL LTDA - CNPJ:38.447.139/0001-50
            </Text>
          </Box>
        </Container>
      </Flex>
      {
        isHome && <ShareFooter />
      }
    </>
  );
}

export default Footer;
