import { Span } from "@/components/Span";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S2Topic3 = () => {
  return (
    <BaseTopic>
      <Flex
        position="relative"
        flexDir={{ base: "column", md: "row" }}
        zIndex="10"
      >
        <Box w="100%">
          <SectionTopic
            section="CONDIÇÕES"
            topic="AppJusto exige código de confirmação em todas as entregas para evitar fraudes do lado do consumidor"
          />
          <Text mt="6">
            A confirmação de corrida por código é uma reivindicação sempre
            presente nas manifestações dos entregadores.{" "}
            <Span bold>
              Ela evita a fraude cometida por consumidores que relatam às
              plataformas que não receberam o produto
            </Span>
            , o que normalmente implica no bloqueio automático do entregador. O
            AppJusto exige o código de confirmação em todas as corridas feitas
            por entregadores dentro da rede desde o lançamento.
          </Text>
        </Box>
        <Center w="100%" mt={{ base: "10", md: "0" }}>
          <Image
            src="/dw/section2-img1.png"
            alt="código de confirmação de entrega"
            w="100%"
            maxW="522px"
          />
        </Center>
      </Flex>
    </BaseTopic>
  );
};
