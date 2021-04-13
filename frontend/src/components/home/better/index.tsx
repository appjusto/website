import { Box, Flex } from '@chakra-ui/react';
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import Content from '../../Content';
import Section from '../../Section';
import Image from '../../Image';
import Topic from './Topic';
import CustomLinkButton from '../../CustomLinkButton';

const Better = () => {
  return (
    <Section>
      <Container pt="24">
        <Content>
          <Flex flexDir={{base: 'column', lg: 'row'}}>
            <Box mr="6" mb={{ base: '6', lg: '0'}} minW="160px">
              <Image src="/courier.png" width="160px" height="160px" eagerLoading />
            </Box>
            <Box>
              <SectionHeading>Melhor para entregadores</SectionHeading>
              <Topic
                label='Autonomia para definir o preço das corridas e outras condições pelo nosso sistema de frotas'
              />
              <Topic
                label='Remuneração na frota AppJusto: R$ 10 até 5km e mais R$ 2 por km adicional'
              />
              <Topic
                label='Recebem valor integral pago pela entrega (subtraindo a taxa da operadora financeira)'
              />
              <Topic
                label='Sem suspensões automáticas: o processo sempre passa por um atendente'
              />
              <Topic
                label='Transparência em todas as regras e preços da plataforma'
              />
            </Box>
          </Flex>
          <Flex mt="16" flexDir={{base: 'column', lg: 'row'}}>
            <Box mr="6" mb={{ base: '6', lg: '0'}} minW="160px">
              <Image src="/business.png" width="160px" height="160px" eagerLoading />
            </Box>
            <Box>
              <SectionHeading>Melhor para restaurantes</SectionHeading>
              <Topic
                label='Comissão de 5% no modelo com operação logística (taxa da operadora financeira cobrada separadamente)'
              />
              <Topic
                label='Exibição igualitária do seu restaurante para os clientes com ordenamento por distância'
              />
              <Topic
                label='Comunicação direta com seus clientes (mediante permissão concedida por eles)'
              />
              <Topic
                label='Transparência em todas as regras e preços da plataforma'
              />
              <CustomLinkButton
                name="go-to-admin"
                link="https://admin.appjusto.com.br/"
                linkLabel="Cadastrar restaurante"
                variant="primary"
                maxW={["100%", null, "220px"]}
              />
            </Box>
          </Flex>
          <Flex mt="16" flexDir={{base: 'column', lg: 'row'}}>
            <Box mr="6" mb={{ base: '6', lg: '0'}} minW="160px">
              <Image src="/consumer.png" width="160px" height="160px" eagerLoading />
            </Box>
            <Box>
              <SectionHeading>Melhor para consumidores</SectionHeading>
              <Topic
                label='Consumir delivery de maneira socialmente responsável e mais sustentável'
              />
              <Topic
                label='Fazer parte de um movimento de impacto social'
              />
              <Topic
                label='Ajudar entregadores a ter melhor qualidade de vida e restaurantes pequenos a prosperar'
              />
              <Topic
                label='Pagar preço de cardápio no Delivery'
              />
              <Topic
                label='Entregas de encomendas até 25% mais baratas'
              />
            </Box>
          </Flex>
        </Content>
      </Container>
    </Section>
  );
};

export default Better;
