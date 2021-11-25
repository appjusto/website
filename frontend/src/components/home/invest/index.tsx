import { Box, Button, Stack, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import NextLink from 'next/link';
import SectionHeading from '../../SectionHeading';
import Item from './Item';

const Invest: React.FC = () => {
  return (
    <Section mt={{ base: '8', lg: '4'}} id="main-video" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Stack direction={{base: 'column', md: 'row'}} spacing={8} h="100%">
          <Box w='100%' display={{base: 'none', md: 'block'}}>
            <Box position="relative">
              <Image src="/circle-players.jpeg" />
            </Box>
          </Box>
          <Box mt={{base: '8' , lg: '0'}} w='100%' minW={{ lg: '600px'}}>
            <SectionHeading highlighted>
              Investir no AppJusto é investir em um bem coletivo
            </SectionHeading>
            <Text mt="10" fontSize={{base: '18px', lg: '20px'}} lineHeight="26px" fontWeight="500">
              As plataformas de entrega atuais operam monopólios e controlam o mercado de maneira agressiva, impondo taxas e regras em benefício próprio. O AppJusto é uma alternativa na qual a economia de plataforma favorece a justiça social, trazendo mais autonomia e respeito.
            </Text>
            <Text mt="10" fontSize={{base: '18px', lg: '20px'}} lineHeight="26px" fontWeight="500">
              Conheça nossos compromissos:
            </Text>
            <Box mt="8">
            <Item
              image="/icon-bike.svg"
              altImg="Ícone de entregador numa moto"
              title="Fornecer autonomia e participação"
            />
            <Item
              image="/item-monetization.svg"
              altImg="Ícone de moeda"
              title="Praticar preço justo para todos"
            />
            <Item
              image="/item-thumb.svg"
              altImg="Ícone de curtir"
              title="Ter eficiência e sustentabilidade financeira"
            />
            <Item
              image="/item-domain.svg"
              altImg="Ícone de prédios"
              title="Criar um bem coletivo"
            />
            <Item
              image="/item-blur.svg"
              altImg="Ícone de pontos"
              title="Manter transparência em toda a plataforma"
            />
            </Box>
          </Box>
          <Box w='100%' display={{base: 'block', md: 'none'}}>
            <Box position="relative">
              <Image src="/circle-players.jpeg" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Invest;
