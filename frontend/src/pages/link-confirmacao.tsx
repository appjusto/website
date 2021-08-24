import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import PageLayout from "../components/PageLayout";

export default function LinkConfirmation() {
  return (
    <PageLayout>
      <Flex mt="-40px" h="80vh" justifyContent="center">
        <Box maxW="752px">
          <Flex justifyContent="center">
            <NextLink href="/" passHref>
              <Link _focus={{ outline: 'none'}} w='120px'>
                <Image
                  src="/logo-pages.svg"
                  alt="Logo AppJusto"
                  width="100%"
                />
              </Link>
            </NextLink>
          </Flex>
          <Text
            mt="8"
            fontFamily="barlow"
            fontSize="24px"
            fontWeight="700"
            lineHeight="26px"
            textAlign="center"
          >
            Você precisa acessar o link usando o seu celular.
          </Text>
          <Text
            mt="8"
            fontFamily="barlow"
            fontSize="16px"
            fontWeight="500"
            lineHeight="22px"
            textAlign="center"
          >
            Dessa forma, o AppJusto consegue identificar automaticamente o seu
            cadastro no aplicativo instalado. Acesse seu e-mail usando o seu celular,
            e clique novamente no link para continuar o acesso.
          </Text>
          <Text
            mt="6"
            fontFamily="barlow"
            fontSize="16px"
            fontWeight="500"
            lineHeight="22px"
            textAlign="center"
          >
            Obrigado por fazer parte desse momento por uma economia mais justa para todos!
          </Text>
          <Flex mt="6" justifyContent="center">
            <Image src="icon-intro-delivery.svg" w="120px"/>
          </Flex>
        </Box>
      </Flex>
    </PageLayout>
  )
}
