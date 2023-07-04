import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";
import { Step } from "./Step";

export const S1Topic3 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "45%" }}>
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="O AppJusto é a única plataforma que o entregador sabe quanto ganhará de acordo com o que percorrer"
          />
          <Text mt="6">
            O algoritmo de precificação do AppJusto é muito simples e sempre
            segue apenas três passos.
          </Text>
        </Box>
        <Flex
          w={{ base: "100%", md: "55%" }}
          flexDir={{ base: "column", lg: "row" }}
          ml={{ base: "0", md: "10" }}
        >
          <Box
            display={{ base: "none", lg: "initial" }}
            w="100%"
            p="40px 40px 20px 50px"
            boxShadow="0px 8px 16px -4px #6976671A"
            borderRadius="lg"
          >
            <Step
              step={1}
              body="Calcula-se a distância entre local de coleta e local de
                entrega utilizando a API de geolocalização do Google Maps;"
            />
            <Step
              step={2}
              body='Verifica se essa distância é menor do que a "Distância Inicial Mínima" definida pela frota escolhida pelo consumidor. Se for igual ou menor, o valor pago pela entrega será o que está definido como "Pagamento mínimo" na frota;'
            />
            <Step
              step={3}
              body='Se a distância for maior, o valor da corrida será o "Pagamento mínimo" + o Valor Adicional por Km Rodado x a diferença entre as distâncias.'
              attached={false}
            />
          </Box>
          <Box
            mt={{ base: "10", md: "0" }}
            display={{ base: "initial", lg: "none" }}
            w="100%"
          >
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <p>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontWeight="semibold"
                      textAlign="left"
                    >
                      Passo 01
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </p>
                <AccordionPanel pb={4}>
                  Calcula-se a distância entre local de coleta e local de
                  entrega utilizando a API de geolocalização do Google Maps;
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <p>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontWeight="semibold"
                      textAlign="left"
                    >
                      Passo 02
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </p>
                <AccordionPanel pb={4}>
                  Verifica se essa distância é menor do que a "Distância Inicial
                  Mínima" definida pela frota escolhida pelo consumidor. Se for
                  igual ou menor, o valor pago pela entrega será o que está
                  definido como "Pagamento mínimo" na frota;
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <p>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontWeight="semibold"
                      textAlign="left"
                    >
                      Passo 03
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </p>
                <AccordionPanel pb={4}>
                  Se a distância for maior, o valor da corrida será o "Pagamento
                  mínimo" + o Valor Adicional por Km Rodado x a diferença entre
                  as distâncias.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="100%" ml={{ base: "0", lg: "-8" }}>
            <Image
              mt={{ base: "8", md: "20" }}
              src="/dw/section1-img2.png"
              alt="tela de aceite de pedidos"
            />
          </Box>
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
