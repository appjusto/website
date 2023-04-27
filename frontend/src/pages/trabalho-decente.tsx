import PageLayout from "../components/PageLayout";
import Head from "next/head";
import Seo from "../components/Seo";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function DecentWorkPage() {
  return (
    <>
      <Head>
        <Seo
          metaDescription="O AppJusto, como forma de aprimorar seu combate à precarização do trabalho pelas plataformas, está trabalhando na luta pelo trabalho decente. Elencamos as ações que estamos fazendo e que ainda iremos fazer baseada nos seguintes critérios: remuneração, contratos, gestão, condições e representações justas."
          title="AppJusto e trabalho decente"
          author="@appjusto"
        />
      </Head>
      <PageLayout pageName="Trabalho decente">
        <Flex>
          <Box>
            <Heading as="h1">AppJusto na luta pelo trabalho decente</Heading>
            <Text>
              O AppJusto, como forma de aprimorar seu combate à precarização do
              trabalho pelas plataformas, está trabalhando na luta pelo trabalho
              decente. Elencamos as ações que estamos fazendo e que ainda iremos
              fazer baseada nos seguintes critérios: remuneração, contratos,
              gestão, condições e representações justas.
            </Text>
          </Box>
        </Flex>
      </PageLayout>
    </>
  );
}
