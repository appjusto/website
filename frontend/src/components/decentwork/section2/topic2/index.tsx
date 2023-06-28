import { Span } from "@/components/Span";
import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S2Topic2 = () => {
  return (
    <BaseTopic>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        minH={{ md: "500px", lg: "600px" }}
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section2-bg.png" alt="seção 2 background" />
        </Box>
        <Box w="100%" maxW="545px" zIndex="10">
          <SectionTopic
            section="CONDIÇÕES"
            topic="AppJusto não impõe prazos de entrega"
          />
          <Text mt="6">
            Acreditamos que as entregas ultra rápidas e os baixos valores pagos
            pelas outras plataformas estão na raiz do grande aumento de
            acidentes de trânsito envolvendo pessoas que fazem entregas. O
            pedido deve chegar rápido sem que o/a entregador/a tenha que se
            arriscar. O que fazemos para isso acontecer:
          </Text>
          <UnorderedList
            mt="6"
            fontSize="xl"
            fontWeight="medium"
            color="gray.900"
          >
            <ListItem>
              Pagamentos justos para que a pessoa não precise fazer tantas
              corridas;
            </ListItem>
            <ListItem>
              Alocação inteligente para evitar espera no restaurante;
            </ListItem>
            <ListItem>
              Não punição automática em caso de demora acima do esperado;
            </ListItem>
          </UnorderedList>
          <Text mt="6">
            <Span bold>Mas pera lá:</Span> conforme esclarecido nos termos de
            uso, assim que a pessoa aceita a corrida, ela se compromete a se
            dirigir ao local indicado e pode ser suspensa em caso de quebra de
            termos.
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
            src="/dw/section2-bg-mob.png"
            alt="seção 2 background mobile"
          />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
