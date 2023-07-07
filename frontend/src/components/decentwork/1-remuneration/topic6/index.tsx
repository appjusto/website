import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic6 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Center w="100%" display={{ base: "none", md: "flex" }}>
          <Image
            src="/dw/section1-img4.png"
            alt="frota appjusto - alta demanda"
            maxW={{ md: "280px", lg: "364px" }}
          />
        </Center>
        <Box w="100%">
          <SectionTopic section="REMUNERAÇÃO" topic="Taxa de alta demanda" />
          <Text mt="6">
            As plataformas pagam o mínimo possível em praticamente todos os
            horários mas oferecem pagamentos maiores em situações em que a
            demanda é muito alta.
          </Text>
          <Text mt="6">
            Para evitar que os entregadores deixem de fazer entregas no AppJusto
            nos momentos de alta demanda, começamos a cobrar (14 de fevereiro)
            uma taxa extra do consumidor, se na hora do pedido o valor que
            estiver sendo pago em outras plataformas for maior do que o
            entregador receberia pelas configurações da frota. Importante
            ressaltar aqui que o valor mínimo continuará respeitando o que foi
            definido na frota.
          </Text>
        </Box>
        <Center mt="10" w="100%" display={{ base: "flex", md: "none" }}>
          <Image
            src="/dw/section1-img4.png"
            alt="frota appjusto - alta demanda"
            maxW="320px"
          />
        </Center>
      </Flex>
    </BaseTopic>
  );
};
