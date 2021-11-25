import { Box, Button, Link, Stack, Text } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import NextLink from 'next/link';
import SectionHeading from '../../SectionHeading';
import StackholderBox from './StackholderBox';
import Topic from './Topic';
import { usePageContext } from '../../../context';

const Better: React.FC = () => {
  // context
  const { storeLink } = usePageContext();
  // UI
  return (
    <Section mt={{ base: '8', lg: '4'}} id="better" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} >
        <SectionHeading w="100%" textAlign={{ md: 'center'}}>
          O AppJusto é melhor para todos
        </SectionHeading>
        <Stack mt="10" direction={{base: 'column', lg: 'row'}} spacing={4} h="100%">
          <StackholderBox
            flex={1}
            image="/stakeholder-courier.png"
            title="Entregadores"
          >
            <Topic label="Remuneração na frota AppJusto: R$ 10 até 5km e mais R$ 2 por km adicional" />
            <Topic label="Autonomia de definir preço e condições próprias no nosso sistema de frotas" />
            <Topic label="Sem suspensões automáticas: o processo sempre passa por um atendente" />
            <Link
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            >
              <Button mt="8" w="auto" px="6" variant="secondary">Baixar app - Entregador</Button>
            </Link>
          </StackholderBox>
          <StackholderBox
            flex={1}
            image="/stakeholder-restaurant.png"
            title="Restaurantes"
          >
            <Topic label="Comissão de 5% no modelo com operação logística + 2,21% da operadora financeira. Calcule seus ganhos agora mesmo!" />
            <Topic label="Exibição igualitária do seu restaurante por ordem de distância do cliente" />
            <Topic label="Transparência em todas as regras" />
            <Link
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href="https://admin.appjusto.com.br/"
              isExternal
            >
              <Button mt="8" w="auto" px="6" variant="tertiary">Cadastrar restaurante</Button>
            </Link>
          </StackholderBox>
          <StackholderBox
            flex={1}
            image="/stakeholder-consumer.png"
            title="Consumidores"
          >
            <Topic label="Preços dos pratos até 20% mais baratos do que em outros apps" />
            <Topic label="Entregas de encomendas até 25% mais baratas" />
            <Topic label="Consumir delivery de maneira socialmente responsável e mais sustentável " />
            <Link
              _focus={{ outline: 'none'}}
              _hover={{textDecor: 'none'}}
              href={storeLink}
              isExternal
            >
              <Button mt="8" w="auto" px="6" variant="primary">Baixar App</Button>
            </Link>
          </StackholderBox>
        </Stack>
      </Container>
    </Section>
  );
}

export default Better;
