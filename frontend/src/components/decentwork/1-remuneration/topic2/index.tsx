import { Span } from "@/components/Span";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic2 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box ml={{ md: "-12" }} display={{ base: "none", md: "initial" }}>
          <Image
            src="/dw/section1-img1.png"
            alt="tela de frotas no app de entregador"
          />
        </Box>
        <Box mt={{ md: "0", lg: "44" }} maxW={{ md: "360px", lg: "620px" }}>
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="O AppJusto é a única plataforma que os entregadores podem definir o valor do próprio trabalho"
          />
          <Text mt="6">
            O AppJusto é a única plataforma de entregas onde os entregadores
            podem formar grupos (frotas) para definir o valor do próprio
            trabalho. No nosso entendimento, é fundamental que trabalhadores
            autônomos possam definir o valor do próprio trabalho ao invés de
            aceitarem valores impostos pelas plataformas.
          </Text>
          <Text mt="6">
            A remuneração é o maior motivo das paralisações da categoria.{" "}
            <Span bold>
              A frota padrão do AppJusto paga exatamente o que os entregadores
              consideram ser o justo nessas manifestações.
            </Span>
          </Text>
        </Box>
        <Box mt="6" ml="-12" display={{ base: "initial", md: "none" }}>
          <Image
            src="/dw/section1-img1.png"
            alt="tela de frotas no app de entregador"
          />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
