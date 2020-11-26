import NextLink from 'next/link'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { MdMailOutline  } from 'react-icons/md'
import { FaLinkedin  } from 'react-icons/fa'
import Container from './Container'

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
            mr={["0", null, null, "26px"]}
          >
            <Icon as={MdMailOutline} 
              color="primary" 
              mr="12px"
              w="20px"
              h="20px"
            />
            <NextLink href="/" passHref>
              <Link _hover={{opacity: 0.9}}>contato@appjusto.com.br</Link>
            </NextLink>
          </Flex>
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            color="white"
            mb={["22px", null, null, "0"]}
          >
            <Icon as={FaLinkedin} 
              color="primary" 
              mr="12px"
              w="20px"
              h="20px"
            />
            <NextLink href="/" passHref>
              <Link _hover={{opacity: 0.9}}>/appjusto</Link>
            </NextLink>
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
          <NextLink href="/" passHref>
            <Link 
              mb={["22px", null, null, "0"]} 
              fontSize="15px"
              mr={["0", null, null, "16px"]}
              _hover={{opacity: 0.9}} 
              >Política de privacidade</Link>
          </NextLink>
          <NextLink href="/termos-de-uso" passHref>
            <Link 
              mb={["22px", null, null, "0"]} 
              fontSize="15px"
              mr={["0", null, null, "16px"]}
              _hover={{opacity: 0.9}}  
              >Termos de uso</Link>
          </NextLink>
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