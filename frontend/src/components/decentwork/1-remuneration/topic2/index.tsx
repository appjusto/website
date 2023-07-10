import { Span } from "@/components/Span";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic2 = () => {
  return (
    <BaseTopic pb={{ base: "4", md: "20", lg: "0" }}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box ml={{ md: "-12" }} display={{ base: "none", md: "initial" }}>
          <Image
            src="/dw/section1-img1.png"
            alt="tela de frotas no app de entregador/a"
          />
        </Box>
        <Box mt={{ md: "0", lg: "44" }} maxW={{ md: "360px", lg: "620px" }}>
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="O AppJusto é a única plataforma onde as pessoas podem definir o valor do próprio trabalho"
          />
          <Text mt="6">
            A remuneração é o maior motivo das paralisações da categoria.{" "}
            <Span bold>
              É por isso que, por padrão, o mínimo pago por corrida é de R$ 10,
              exatamente o valor reivindicado nas manifestações.
            </Span>
          </Text>
          <Text mt="6">
            Mas no AppJusto, qualquer entregador ou entregadora pode formar
            grupos (frotas) para definir o valor da entrega e outras condições
            de participação. As frotas podem ser criadas a qualquer momento, sem
            nenhuma moderação do AppJusto. Todas as frotas que tiverem pelo
            menos 5 participantes disponíveis para uma entrega aparecerão como
            opção para o consumidor. Esse mecanismo existe para legitimar a
            frota e evitar abusos (preços muito altos ou muito baixos).
          </Text>
        </Box>
        <Box mt="6" ml="-12" display={{ base: "initial", md: "none" }}>
          <Image
            src="/dw/section1-img1.png"
            alt="tela de frotas no app de entregador/a"
          />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
