import { Span } from "@/components/Span";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic4 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "12" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section4-bg3.png" alt="seção 4 background" />
        </Box>
        <Box ml={{ lg: "6" }} maxW="545px" zIndex="10">
          <SectionTopic
            section="GESTÃO"
            topic="O AppJusto permite que grupos de pessoas desfavorecidas possam se juntar em frotas"
          />
          <Text mt="6">
            O principal objetivo das frotas é permitir que as pessoas possam se
            juntar e <Span bold>definir as condições do próprio trabalho</Span>,
            como distâncias máximas e o valor por quilômetro. Além disso, frotas
            podem ser utilizadas para criar serviços específicos (frotas com
            veículos verdes) e para{" "}
            <Span bold>juntar pessoas desfavorecidas</Span>.
          </Text>
        </Box>
      </Flex>
      <Center
        display={{ base: "flex", lg: "none" }}
        mb={{ base: "-16", lg: "0" }}
      >
        <Image
          mt="8"
          w="120px"
          src="/dw/section4-img2.png"
          alt="seção 4 background"
        />
      </Center>
    </BaseTopic>
  );
};
