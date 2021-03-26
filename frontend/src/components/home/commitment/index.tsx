import { Box, Link, Image, HStack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Item from './Item';
import Content from "../../Content";
import SectionHeading from "../../SectionHeading";
import NextLink from 'next/link';

const Commitment: React.FC = () => {
  return (
    <Section id="commitment">
      <Container pt="24">
        <Content>
          <SectionHeading>
            Nosso compromisso é com a sociedade e isso se traduz em nossos princípios
          </SectionHeading>
          <Box>
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
            <Item
              image="/item-world.svg"
              altImg="Ícone de planeta"
              title="Colaborar com os Objetivos de Desenvolvimento Sustentáveis da ONU"
              ods={true}
            />
          </Box>
          <HStack mt="8">
            <Box>
              <Image src='/arrow-right.svg' />
            </Box>
            <NextLink href="/sobre-o-appjusto" passHref>
              <Link ml="4" fontSize="lg" fontWeight="700" lineHeight="26px" textDecor="underline">
                Saiba mais sobre o AppJusto
              </Link>
            </NextLink>
          </HStack>
          <HStack mt="4">
            <Box>
              <Image src='/arrow-right.svg' />
            </Box>
            <Link
              href="https://drive.google.com/file/d/1pMniZvENzeChLN3ERibhKdEHrlq75PZ2/view?usp=sharing"
              fontSize="lg"
              fontWeight="700"
              lineHeight="26px"
              textDecor="underline"
              isExternal
            >
              Baixe nossa apresentação
            </Link>
          </HStack>
        </Content>
      </Container>
    </Section>
  );
}

export default Commitment;
