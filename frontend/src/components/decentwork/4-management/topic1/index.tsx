import { Span } from "@/components/Span";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic1 = () => {
  return (
    <BaseTopic>
      <Flex position="relative" flexDir={{ base: "column", md: "row" }}>
        <Box maxW={{ md: "380px", lg: "645px" }}>
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
        <Center
          w="100%"
          // maxW="400px"
          mt={{ base: "10", md: "0" }}
          ml={{ md: "6", lg: "0" }}
          zIndex="10"
        >
          <Image
            src="/dw/section4-img1.png"
            alt="código de confirmação de entrega"
            w="100%"
            maxW={{ md: "380px", lg: "440px" }}
          />
        </Center>
        <Flex
          w="100vw"
          ml={{ md: "-10", lg: "0" }}
          position="absolute"
          top={{ md: "-60px", lg: "-280px" }}
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
        >
          <Image
            w={{ md: "200px", lg: "360px" }}
            src="/dw/section4-bg.png"
            alt="seção 4 background"
          />
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
