import { Box, Center, Flex, Image, Link, Text, Icon, HStack } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import Seo from "../components/Seo";
import CustomLinkButton from "../components/CustomLinkButton";
import React from "react";
import { getDownloadURLByPath } from "../utils/businesses";
import { MdInfoOutline } from 'react-icons/md'

// https://firebasestorage.googleapis.com/v0/b/app-justo-staging.appspot.com/o/admin-desktop%2FAppJusto%20Admin%20Desktop%209.2.4.exe.zip?alt=media&token=81258f94-c5a6-4154-9271-6ecbcc5c9086

export default function AdminDesktopDownloadPage() {
  // state
  const [downloadLink, setDownloadLink] = React.useState<string>();
  const [isDownloading, setIsDownloading] = React.useState(false);
  // handlers
  const handleDownloadInfo = () => {
    setTimeout(() => setIsDownloading(true), 2000);
  }
  // side effects
  React.useEffect(() => {
    getDownloadURLByPath('admin-desktop/AdminDesktop.zip', setDownloadLink)
  }, [])
  // UI
  return (
    <>
    <Head>
      <Seo
        metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
        title="AppJusto"
        author="@appjusto"
      />
      <title>AppJusto Admin Desktop Download</title>
    </Head>
    <Center w="100vw" h="100vh">
      <Flex flexDir="column" alignItems="center" maxW="600px">
        <Center
          w="140px"
          h="140px"
          border="1px solid #a5a5a5"
          borderRadius="12px"
        >
          <Box w="120px">
            <Image src="/logo-pages.svg" alt="Logo AppJusto" ignoreFallback />
          </Box>
        </Center>
        <Text mt="6" fontSize="24px" fontWeight="700" textAlign="center" lineHeight="26px">
          Download da versão{' '}
          <Text as="mark" bgColor="#FFE493">beta</Text>{' '}
          do Admin Desktop
        </Text>
        <Text
          mt="6"
          fontSize="16px"
          fontWeight="500"
          textAlign="center"
          lineHeight="22px"
        >
          Você foi convidado para nos ajudar a testar nosso novo recurso, o aplicativo de desktop do AppJusto Admin - o portal do seu restaurante. 🚀
        </Text>
        {downloadLink === undefined && <Text>Carregando...</Text>}
        {downloadLink === null && (
          <Text>Ocorreu algum erro ao gerar link =/</Text>
        )}
        {downloadLink && (
          <CustomLinkButton
            id="download-button"
            mt="8"
            variant="primary"
            size="lg"
            minW={{lg: "250px"}}
            link={downloadLink}
            linkLabel="Baixar aplicação para Windows"
            onClick={handleDownloadInfo}
            isDownload
          />
        )}
        <Text
          mt="6"
          fontSize="14px"
          fontWeight="500"
          textAlign="center"
          lineHeight="22px"
          maxW="350px"
          onClick={handleDownloadInfo}
        >
          Após o download, basta descompactar o arquivo, para a pasta desejada, e executar-lo. Não requer instalação.
        </Text>
        {
          isDownloading && (
            <HStack
              mt="6"
              p="4"
              spacing={6}
              border="1px solid grey"
              borderRadius="8px"
            >
              <Center w="24px">
                <Icon as={MdInfoOutline} w="24px" h="24px"/>
              </Center>
              <Box w="100%">
                <Text fontWeight="500" lineHeight="22px">
                  Por se tratar de um software em desenvolvimento, é esperado que o windows bloqueie a execução do mesmo. Basta clicar em
                  <Text as="span" mx="4px" fontWeight="700">"mais informações"</Text>
                  e depois em
                  <Text as="span" ml="4px" fontWeight="700">"executar mesmo assim"</Text>
                  .
                </Text>
              </Box>
            </HStack>
          )
        }
        <NextLink href="/" passHref>
          <Link
            mt="12"
            fontSize="16px"
            fontWeight="500"
            lineHeight="21px"
            textDecor="underline"
            _focus={{ outline: 'none'}}
          >
            Voltar para página inicial
          </Link>
        </NextLink>
      </Flex>
    </Center>
    </>
  )
}
