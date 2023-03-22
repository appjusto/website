import { Box, Stack, Text } from "@chakra-ui/react";
import Section from "../../Section";
import Container from "../../Container";
import SectionHeading from "../../SectionHeading";
import StackholderBox from "./StackholderBox";
import Topic from "./Topic";
import { usePageContext } from "../../../context";
import CustomLinkButton from "../../CustomLinkButton";
import { NextLink } from "src/components/NextLink";

const Better: React.FC = () => {
  // context
  const { storeLink } = usePageContext();
  // UI
  return (
    <Section mt="4" id="better" h="auto">
      <Container pt={{ base: "8", lg: "16" }} pb={{ base: "10", lg: "8" }}>
        <SectionHeading w="100%" textAlign={{ md: "center" }}>
          O AppJusto é melhor para todos
        </SectionHeading>
        <Stack
          mt="10"
          direction={{ base: "column", lg: "row" }}
          spacing={4}
          h="100%"
        >
          <StackholderBox
            flex={1}
            image="/stakeholder-courier.png"
            title="Entregadores"
          >
            <Box>
              <Topic label="Remuneração na frota AppJusto: R$ 10 até 5km e mais R$ 2 por km adicional" />
              <Topic label="Autonomia de definir preço e condições próprias no nosso sistema de frotas" />
              <Topic label="Sem suspensões automáticas: o processo sempre passa por um atendente" />
            </Box>
            <CustomLinkButton
              mt={{ base: "6", lg: "0" }}
              w="auto"
              px="6"
              fontSize="16px"
              size="lg"
              variant="secondary"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              linkLabel="Cadastre-se como entregador"
              isExternal
            />
          </StackholderBox>
          <StackholderBox
            flex={1}
            image="/stakeholder-restaurant.png"
            title="Restaurantes"
          >
            <Box>
              <Topic label="Comissão de 5% no modelo com operação logística + 2,42% da operadora financeira.">
                <NextLink
                  href="/calculadoras/restaurantes"
                  textDecor="underline"
                  fontWeight="700"
                  _focus={{ outline: "none" }}
                >
                  <Text as="mark" bgColor="#FFE493">
                    Calcule seus ganhos agora mesmo!
                  </Text>
                </NextLink>
              </Topic>
              <Topic label="Exibição igualitária do seu restaurante por ordem de distância do cliente" />
              <Topic label="Transparência em todas as regras" />
            </Box>
            <CustomLinkButton
              mt={{ base: "6", lg: "0" }}
              w="auto"
              px="6"
              fontSize="16px"
              size="lg"
              variant="tertiary"
              link="https://admin.appjusto.com.br/"
              linkLabel="Cadastre seu restaurante"
              isExternal
            />
          </StackholderBox>
          <StackholderBox
            flex={1}
            image="/stakeholder-consumer.png"
            title="Consumidores"
          >
            <Box>
              <Topic label="Preços dos pratos até 20% mais baratos do que em outros apps" />
              <Topic label="Entregas de encomendas até 25% mais baratas" />
              <Topic label="Consumir delivery de maneira socialmente responsável e mais sustentável " />
            </Box>
            <CustomLinkButton
              mt={{ base: "6", lg: "0" }}
              w="auto"
              px="6"
              fontSize="16px"
              size="lg"
              variant="primary"
              link={storeLink}
              linkLabel="Baixe o App e faça um pedido"
              isExternal
            />
          </StackholderBox>
        </Stack>
      </Container>
    </Section>
  );
};

export default Better;
