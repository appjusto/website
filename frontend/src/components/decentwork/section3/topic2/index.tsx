import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S3Topic2 = () => {
  return (
    <BaseTopic>
      <Flex
        position="relative"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH={{ md: "500px", lg: "600px" }}
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section3-bg.png" alt="seção 3 background" />
        </Box>
        <Center
          mt={{ base: "-10", md: "none" }}
          w="100%"
          display={{ base: "flex", lg: "none" }}
          pb="10"
        >
          <Image
            w={{ base: "40px", md: "60px" }}
            src="/dw/section3-img-mob.png"
            alt="seção 3 background"
          />
        </Center>
        <Box w="100%" maxW="545px" zIndex="10">
          <SectionTopic
            section="CONTRATOS"
            topic="Não há contratação de operadores logísticos (OL), mas há a contratação de empresas caso não haja disponibilidade de entregadores na rede"
            color="white"
          />
          <Text mt="6" color="white">
            O AppJusto não contrata nenhum OL com objetivo de exigir o
            cumprimento de horário, posicionamento ou nada do tipo. Caso não
            haja entregadores disponíveis no AppJusto para fazer a corrida,
            contratamos uma empresa para realizar aquela entrega específica. O
            AppJusto nunca fica com nada que o consumidor paga pela entrega e
            repassa o valor integralmente para a empresa contratada. Caso sobre
            alguma quantia, nós repassamos aos entregadores que se cadastram na
            plataforma.
          </Text>
          <Text mt="6" color="white">
            Não há acesso ao microfone. O envio da localização só acontece
            quando o entregador está disponível para corridas. A câmera é
            utilizada para tirar fotos dos documentos na hora do cadastro e caso
            o entregador precise confirmar uma entrega onde não recebeu o código
            de confirmação do consumidor.
          </Text>
        </Box>
        <Box
          w="100vw"
          position="absolute"
          bottom="-520px"
          display={{ base: "flex", md: "none" }}
          zIndex="1"
        >
          <Image
            src="/dw/section3-bg-mob.png"
            alt="seção 3 background mobile"
          />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
