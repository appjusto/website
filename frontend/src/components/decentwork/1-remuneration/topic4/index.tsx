import { Span } from "@/components/Span";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic4 = () => {
  return (
    <BaseTopic pb={{ base: "4", lg: "0" }}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box w="100%" display={{ base: "none", md: "initial" }}>
          <Image src="/dw/section1-img3.png" alt="tela de detalhes do pedido" />
        </Box>
        <Box w="100%">
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="AppJusto é a única plataforma onde os entregadores sabem quanto o cliente pagou pela entrega e recebem o valor pago integralmente"
          />
          <Text mt="6">
            Em todas as entregas, desde o lançamento, o entregador ou
            entregadora sempre soube{" "}
            <Span bold>
              exatamente quanto o consumidor estava pagando pela entrega
            </Span>
            , inclusive o valor das taxas cobradas pelo nosso operador
            financeiro.
          </Text>
          <Text mt="6">
            Desde de janeiro deste ano, as taxas financeiras (R$ 0,24,
            considerando uma corrida de R$ 10) são pagas pelo consumidor para
            que o entregador ou entregadora receba o valor líquido definido na
            frota.
          </Text>
        </Box>
        <Box mt="10" w="100%" display={{ base: "initial", md: "none" }}>
          <Image src="/dw/section1-img3.png" alt="tela de detalhes do pedido" />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
