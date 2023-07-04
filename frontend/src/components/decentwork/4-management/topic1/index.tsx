import { Span } from "@/components/Span";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic1 = () => {
  return (
    <BaseTopic>
      <Flex position="relative">
        <Box ml={{ lg: "32" }} maxW="545px">
          <SectionTopic
            section="GESTÃO"
            topic="As aprovações de cadastros acontecem todas às sextas sem nenhum tipo de distinção"
          />
          <Text mt="6">
            A aprovação de pessoas para realizar entregas é feita pelo nosso
            time, <Span bold>sem a utilização de algoritmos</Span>. Os critérios
            para liberação são: estar numa cidade atendida (atualmente só São
            Paulo), possuir MEI ou CNPJ para prestação do serviço, conta
            bancária e ter mais de 18 anos. Após o preenchimento do cadastro, a
            validação é feita no máximo em 7 dias.
          </Text>
        </Box>
        <Flex
          w="100vw"
          ml={{ md: "-10", lg: "0" }}
          position="absolute"
          top={{ md: "-60px", lg: "-160px" }}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          <Image
            w={{ md: "200px", lg: "380px" }}
            src="/dw/section4-bg.png"
            alt="seção 4 background"
          />
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
