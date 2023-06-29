import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic2 = () => {
  return (
    <BaseTopic>
      <Flex mt={{ lg: "12" }} position="relative" justifyContent="flex-end">
        <Box ml={{ lg: "32" }} maxW="545px" zIndex="10" mr={{ lg: "32" }}>
          <SectionTopic
            section="GESTÃO"
            topic="O AppJusto só bloqueia contas de trabalhadores após análise humana"
          />
          <Text mt="6">
            Em caso de suspeita de quebra de termos de uso, nosso time tenta
            entrar em contato com a pessoa para averiguar a situação. Caso a
            pessoa não atenda, nós impedimos que essa pessoa realize novos
            pedidos até que a situação seja esclarecida.
          </Text>
          <Text mt="6">
            Caso a pessoa não apresente uma justificativa plausível para o
            ocorrido, o time pode decidir por manter a suspensão e realizar um
            bloqueio em duas semanas. Durante a suspensão, a pessoa pode
            utilizar o aplicativo para realizar saques de valores anteriores ou
            excluir sua conta.
          </Text>
        </Box>
        <Flex
          w="100vw"
          position="absolute"
          top={{ md: "-30px", lg: "-60px" }}
          left="-32"
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-start"
          zIndex="1"
        >
          <Image
            w={{ md: "260px", lg: "380px" }}
            src="/dw/section4-bg2.png"
            alt="seção 4 background"
          />
        </Flex>
        <Flex
          w="100vw"
          position="absolute"
          bottom="-460px"
          left="-32"
          display={{ base: "flex", md: "none" }}
          justifyContent="flex-start"
          zIndex="1"
        >
          <Image
            w="380px"
            src="/dw/section4-bg2.png"
            alt="seção 4 background"
          />
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
