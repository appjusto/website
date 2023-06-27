import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic5 = () => {
  return (
    <BaseTopic>
      <Flex
        justifyContent="center"
        alignItems="center"
        minH={{ md: "500px", lg: "600px" }}
      >
        <Box
          position="absolute"
          w="100%"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section1-bg.png" alt="tela de aceite de pedidos" />
        </Box>
        <Box w="100%" maxW="545px">
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="O AppJusto é a plataforma que paga os entregadores mais rapidamente"
          />
          <Text mt="6">
            O dinheiro é disponibilizado para os entregadores um dia após a
            realização da entrega, mesmo nos pedidos que foram pagos com cartão
            de crédito (que demoramos um mês para receber).
          </Text>
          <Text mt="6">
            O entregador pode sacar o valor pago a qualquer momento (em horário
            comercial). A operadora financeira cobra a taxa de R$ 1 para fazer a
            transferência dos valores para a conta corrente do entregador.
          </Text>
        </Box>
      </Flex>
    </BaseTopic>
  );
};
