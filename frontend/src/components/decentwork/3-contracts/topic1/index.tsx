import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S3Topic1 = () => {
  return (
    <BaseTopic>
      <Stack
        spacing={{ base: 10, md: 6 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <SectionTopic
            section="CONTRATOS"
            topic="Termos de uso sempre acessíveis"
            color="white"
          />
          <Text mt="6" color="white">
            Nossos termos estão sempre acessíveis pelo menu no App e também na
            web. O histórico de alterações dos termos de uso está{" "}
            <Link
              textDecoration="underline"
              isExternal
              href="https://github.com/appjusto/docs/commits/main/legal/termos-de-uso-entregadores.md"
            >
              público no Github
            </Link>{" "}
            do AppJusto.
          </Text>
        </Box>
        <Box>
          <SectionTopic
            section="CONTRATOS"
            topic="Entregadores podem excluir seus dados a qualquer momento"
            color="white"
          />
          <Text mt="6" color="white">
            Entregadores podem excluir seu cadastro a qualquer momento. Para
            evitar fraudes, os dados são movidos para uma quarentena por 30 dias
            e depois excluídos em definitivo.
          </Text>
        </Box>
      </Stack>
    </BaseTopic>
  );
};
