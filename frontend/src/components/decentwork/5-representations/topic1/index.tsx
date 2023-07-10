import { Span } from "@/components/Span";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S5Topic1 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "12" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="545px" zIndex="10">
          <SectionTopic
            section="REPRESENTAÇÃO"
            topic="O AppJusto favorece a autonomia e a autogestão através das frotas"
          />
          <Text mt="6">
            O principal objetivo das frotas é permitir que as pessoas possam se
            juntar e <Span bold>definir as condições do próprio trabalho</Span>,
            como distâncias máximas e o valor por quilômetro. As frotas foi o
            mecanismo de descentralização que o AppJusto criou para que as
            pessoas possam se organizar coletivamente e ter{" "}
            <Span bold>autonomia sobre o próprio trabalho</Span>.
          </Text>
        </Box>{" "}
      </Flex>
    </BaseTopic>
  );
};
