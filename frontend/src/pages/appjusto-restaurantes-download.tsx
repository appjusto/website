import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Icon,
  HStack,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import Head from "next/head";
import Seo from "@/components/Seo";
import CustomLinkButton from "@/components/CustomLinkButton";
import React from "react";
import { MdCheck, MdInfoOutline } from "react-icons/md";
import { getDownloadURLByPath } from "@/utils/businesses";
import { NextLink } from "@/components/NextLink";
import { Span } from "@/components/Span";

export default function AdminDesktopDownloadPage() {
  // state
  const [downloadLink, setDownloadLink] = React.useState<string>();
  const [isDownloading, setIsDownloading] = React.useState(false);
  // handlers
  const handleDownloadInfo = () => {
    setTimeout(() => setIsDownloading(true), 2000);
  };
  // side effects
  React.useEffect(() => {
    getDownloadURLByPath("admin-desktop/AdminDesktop.zip", setDownloadLink);
  }, []);
  // UI
  return (
    <>
      <Head>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title="AppJusto"
          author="@appjusto"
        />
        <title>AppJusto | Restaurantes Download</title>
      </Head>
      <Center w="100vw" h="100vh">
        <Flex flexDir="column" alignItems="center" maxW="600px">
          <Center
            w="100px"
            h="100px"
            border="1px solid #a5a5a5"
            borderRadius="12px"
          >
            <Box w="80px">
              <Image src="/logo-pages.svg" alt="Logo AppJusto" ignoreFallback />
            </Box>
          </Center>
          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="700"
            lineHeight="1.5rem"
            textAlign="center"
          >
            Download da versão{" "}
            <Text as="mark" bgColor="#FFE493">
              beta
            </Text>{" "}
            do AppJusto Restaurantes
          </Text>
          <Text
            mt="6"
            fontSize="md"
            fontWeight="500"
            lineHeight="1.5rem"
            textAlign="center"
          >
            Tenha uma melhor experiência na gestão dos seus pedidos:
          </Text>
          <List mt="2" color="black" spacing={2}>
            <ListItem>
              <ListIcon as={MdCheck} w="18px" h="18px" color="primary" />
              Campainha de novos pedidos sempre ativa
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} w="18px" h="18px" color="primary" />
              Notificações de novos pedidos na área de trabalho
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} w="18px" h="18px" color="primary" />
              Por cima de outros apps quando você receber pedidos
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} w="18px" h="18px" color="primary" />
              Sinal sonoro e notificações de novas mensagens de chat
            </ListItem>
          </List>
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
              minW={{ lg: "250px" }}
              link={downloadLink}
              linkLabel="Baixar aplicação para Windows"
              onClick={handleDownloadInfo}
              isDownload
            />
          )}
          <Text
            mt="6"
            fontSize="sm"
            textAlign="center"
            lineHeight="1.5rem"
            maxW="350px"
          >
            Após o download, basta descompactar o arquivo, para a pasta
            desejada, e executar-lo. Não requer instalação. 🚀
          </Text>
          {isDownloading && (
            <HStack
              mt="6"
              p="4"
              spacing={6}
              border="1px solid grey"
              borderRadius="8px"
            >
              <Center w="24px">
                <Icon as={MdInfoOutline} w="24px" h="24px" />
              </Center>
              <Box w="100%">
                <Text fontSize="md" lineHeight="1.5rem">
                  Por se tratar de uma versão beta, o windows pode exibir um
                  alerta de software não reconhecido e pausar a execução do
                  mesmo. Basta clicar em
                  <Span mx="4px" bold>
                    "mais informações"
                  </Span>
                  e depois em
                  <Span mx="4px" bold>
                    "executar mesmo assim"
                  </Span>
                  .
                </Text>
              </Box>
            </HStack>
          )}
          <NextLink
            mt="12"
            href="/"
            fontSize="16px"
            fontWeight="500"
            lineHeight="21px"
            textDecor="underline"
            _focus={{ outline: "none" }}
          >
            Voltar para página inicial
          </NextLink>
        </Flex>
      </Center>
    </>
  );
}
