import NextLink from 'next/link'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { MdMailOutline  } from 'react-icons/md'
import { FaLinkedin  } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      p={["33px 16px 9px", "42px 0"]}
      justifyContent="center"
      alignItems="center"
      bg="black"
      fontFamily="Barlow"
      textDecoration="underline"
    >
      <Flex
        w={["100%", "90%"]}
        maxW="1296px"
        flexDir={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          w="100%"
          m="0"
          p="0"
          flexDir={["column", "row"]}
          justifyContent="flex-start"
          alignItems="flex-start"
          mb={["50px", "0"]}
        >
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            color="white"
            mb={["22px", "0"]}
            mr={["0", "26px"]}
          >
            <Icon as={MdMailOutline} 
              color="primary" 
              mr="12px"
              w="20px"
              h="20px"
            />
            <NextLink href="/" passHref>
              <Link>contato@appjusto.com.br</Link>
            </NextLink>
          </Flex>
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            color="white"
            mb={["22px", "0"]}
          >
            <Icon as={FaLinkedin} 
              color="primary" 
              mr="12px"
              w="20px"
              h="20px"
            />
            <NextLink href="/" passHref>
              <Link>/appjusto</Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          m="0"
          p="0"
          flexDir={["column", "row"]}
          justifyContent={["flex-start", "flex-end"]}
          alignItems={["flex-start", "flex-end"]}
          color="white"
        >
          <NextLink href="/" passHref>
            <Link 
              mb={["22px", "0"]} 
              fontSize="15px"
              mr={["0", "16px"]} 
              >Política de privacidade</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link 
              mb={["22px", "0"]} 
              fontSize="15px"
              mr={["0", "16px"]}  
              >Termos de uso</Link>
          </NextLink>
          <Text 
            mb={["22px", "0"]} 
            fontSize="15px"
            >
            © {new Date().getFullYear()} AppJusto. Marca Registrada.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;