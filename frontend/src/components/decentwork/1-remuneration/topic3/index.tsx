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
            topic="No AppJusto os alogritmos são simples e transparentes"
          />
          <Text mt="6">
            O algoritmo de precificação do AppJusto é muito simples e sempre
            segue apenas três passos, como explicado ao lado. Na nossa
            platarorma, o entregador ou entregadora sempre sabe exatamente
            quanto ganhará pela corrida.
          </Text>
          <Text mt="6">
            Para achar a pessoa, o processo também é muito simples. A corrida é
            enviada sempre para a pessoa mais próxima do local de coleta. A cada
            15 segundos, a próxima pessoa mais próxima receberá o pedido, até
            que alguém aceite. As únicas condições para receber a corrida são:
            estar disponível na plataforma; ter enviado a localização há menos
            de 20 minutos; e estar numa frota que pode realizar corrida nas
            distâncias do pedido em questão.
          </Text>
          <Box mt="10" display={{ base: "block", lg: "none" }} w="100%">
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
            w="100%"
            ml={{ lg: "-8" }}
            display={{ base: "none", lg: "block" }}
          >
            <Image
              src="/dw/section1-img2.png"
              alt="tela de aceite de pedidos"
            />
          </Box>
          <Box w="100%" display={{ base: "block", lg: "none" }}>
            <Image
              mt={{ base: "8", md: "0" }}
              src="/dw/section1-img2-mob.png"
              alt="tela de aceite de pedidos"
            />
          </Box>
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
