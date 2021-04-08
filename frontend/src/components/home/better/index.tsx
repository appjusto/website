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
                label='Entregadores têm autonomia de criar frotas com condições próprias'
              />
              <Topic
                label='Maior remuneração por corrida'
              />
              <Topic
                label='Recebe valor integral - grande diferença para corridas roteirizadas e de courrier'
              />
              <Topic
                label='Regras transparentes'
              />
              <Topic
                label='Participação ativa na plataforma'
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
                label='Taxa de 5% em vez de 27%'
              />
              <Topic
                label='Possibilidade de gerir frota própria direto na plataforma'
              />
              <Topic
                label='Regras transparentes'
              />
              <Topic
                label='Sem direcionamento de demanda para contratos exclusivos'
              />
              <Topic
                label='Participação ativa na plataforma'
              />
              {/*<CustomLinkButton
                name="go-to-admin"
                link="https://admin.appjusto.com.br/"
                linkLabel="Cadastrar restaurante"
                variant="primary"
                maxW={["100%", null, "220px"]}
              />*/}
            </Box>
          </Flex>
          <Flex mt="16" flexDir={{base: 'column', lg: 'row'}}>
            <Box mr="6" mb={{ base: '6', lg: '0'}} minW="160px">
              <Image src="/consumer.png" width="160px" height="160px" eagerLoading />
            </Box>
            <Box>
              <SectionHeading>Melhor para consumidores</SectionHeading>
              <Topic
                label='Pagar preço mais barato do cardápio nos pedidos de Delivery'
              />
              <Topic
                label='Entregas de encomendas em média 25% mais baratas que a concorrência'
              />
              <Topic
                label='Consciência que entregador recebe mais e restaurante pagar menos'
              />
            </Box>
          </Flex>
        </Content>
      </Container>
    </Section>
  );
};

export default Better;
