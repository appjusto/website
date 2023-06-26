import Container from "@/components/Container";
import Section from "@/components/Section";
import { Span } from "@/components/Span";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SectionHeader } from "../SectionHeader";
import { SectionTopic } from "../SectionTopic";
import { IndicatorBox } from "./IndicatorBox";
import { Step } from "./Step";

const Section1: React.FC = () => {
  return (
    <Section id="dw-section1" minH="100vh">
      <Container minH="100vh">
        <SectionHeader
          sectionNumber={1}
          title="Remuneração"
          description={
            <Text>
              Garantia que o trabalhador tenha pelo menos{" "}
              <strong>um salário digno</strong> (salário mínimo com base na
              região) descontados os custos/gastos para trabalhar.
            </Text>
          }
        />
        <Flex
          mt={{ base: "6", md: "12" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "flex-end" }}
        >
          <SectionTopic section="REMUNERAÇÃO" topic="Principais indicadores " />
          <Text mt={{ base: "4", md: "0" }} fontSize="lg" fontWeight="normal">
            Atualizado: 16/06/2023
          </Text>
        </Flex>
        <Flex
          mt={{ base: "6", md: "14" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "center" }}
          py={{ base: "6", md: "12" }}
          px={{ base: "4", md: "16" }}
          boxShadow="2px 8px 16px 2px rgba(105, 118, 103, 0.2)"
          borderRadius="lg"
        >
          <Box maxW="452px">
            <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
              R$18,10 por hora
            </Text>
            <Text>
              É o que os entregadores ganham em média,{" "}
              <Span bold>sem considerar as gorjetas.</Span>
            </Text>
          </Box>
          <Box
            mt={{ base: "4", md: "0" }}
            p="4"
            maxW="444px"
            border="1px solid"
            borderColor="green.300"
            borderRadius="lg"
            bgColor="green.50"
          >
            <Text fontSize="lg">
              O valor é cerca de 3,3x <Span bold>maior</Span> que o mínimo local
              e cerca de <Span bold>65% do valor ideal</Span> calculado pelo
              DIEESE.
            </Text>
          </Box>
        </Flex>
        <Box
          mt={{ base: "6", md: "14" }}
          maxW="100vw"
          overflowX={{ base: "scroll", md: "unset" }}
        >
          <Flex
            w={{ base: "100%", md: "100%" }}
            flexDir={{ base: "row", md: "column" }}
            justify="space-between"
          >
            <HStack spacing={6}>
              <IndicatorBox
                title="31,38 min"
                description="Tempo média  de entrega"
              />
              <IndicatorBox
                title="6,29 km*"
                description="Distância média percorrida"
              />
              <IndicatorBox title="R$1,56**" description="Gasto por corrida" />
            </HStack>
            <HStack mt={{ md: "6" }} ml={{ base: "6", md: "0" }} spacing={6}>
              <IndicatorBox
                title="R$11,21"
                description="Ganho bruto por corrida"
              />
              <IndicatorBox
                title="R$9,65"
                description="Ganho líquido por corrida"
              />
              <IndicatorBox
                title="R$18,26"
                description="Ganho líquido médio por hora"
              />
            </HStack>
          </Flex>
        </Box>
        <Box mt={{ base: "6", md: "10" }}>
          <Text fontSize="md" color="gray.600">
            * 2,39km de deslocamento até a coleta + 3,9km da coleta até a
            entrega
          </Text>
          <Text fontSize="md" color="gray.600">
            ** Combustível, manutenção e plano móvel, considerando 390 corridas
            / mês
          </Text>
        </Box>
        <Flex
          mt={{ base: "24", md: "16", lg: "32" }}
          flexDir={{ base: "column", md: "row" }}
        >
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
        <Flex
          mt={{ base: "24", md: "16", lg: "32" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "45%" }}>
            <SectionTopic
              section="REMUNERAÇÃO"
              topic="O AppJusto é a única plataforma que o entregador sabe quanto ganhará de acordo com o que percorrer"
            />
            <Text mt="6">
              O algoritmo de precificação do AppJusto é muito simples e sempre
              segue três passos.
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
              display={{ base: "initial", lg: "none" }}
              mt={{ base: "10", md: "0" }}
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
                    Verifica se essa distância é menor do que a "Distância
                    Inicial Mínima" definida pela frota escolhida pelo
                    consumidor. Se for igual ou menor, o valor pago pela entrega
                    será o que está definido como "Pagamento mínimo" na frota;
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
                    Se a distância for maior, o valor da corrida será o
                    "Pagamento mínimo" + o Valor Adicional por Km Rodado x a
                    diferença entre as distâncias.
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
      </Container>
    </Section>
  );
};

export default Section1;
