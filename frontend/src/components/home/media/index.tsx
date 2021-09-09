import { Stack, Text } from '@chakra-ui/react';
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import Content from '../../Content';
import Section from '../../Section';
import MediaBox from './MediaBox';

const Media = () => {
  return (
    <Section id="media">
      <Container pt="24">
        <Content>
          <SectionHeading>Veja o que já falaram sobre nós</SectionHeading>
          <Text mb="6" textStyle="p">
            Graças ao seu apoio, o AppJusto está cada vez mais na mídia. Continue
            divulgando e faça chegar a ainda mais pessoas!
          </Text>
          <Stack direction={{base: 'column', lg: 'row'}} spacing={4}>
            <MediaBox
              text="Aplicativo promete remuneração justa e autonomia para entregadores"
              link="https://www1.folha.uol.com.br/empreendedorsocial/2021/05/aplicativo-promete-remuneracao-justa-e-autonomia-para-entregadores.shtml"
              image="/logo-folha.png"
              altImg="logo Folha de São Paulo"
            />
            <MediaBox
              text="Aplicativo permite que entregadores decidam quanto vão cobrar por corrida"
              link="https://revistapegn.globo.com/Startups/noticia/2021/05/aplicativo-permite-que-entregadores-decidam-quanto-vao-cobrar-por-corrida.html"
              image="/logo-pegn.png"
              altImg="logo PEGN"
            />
          </Stack>
          <Stack mt="4" direction={{base: 'column', lg: 'row'}} spacing={4}>
          <MediaBox
              text="Impacto social por delivery"
              link="https://www.istoedinheiro.com.br/impacto-social-por-delivery/"
              image="/logo-istoe.png"
              altImg="logo Istoé"
            />
            <MediaBox
              text="Experiências alternativas no trabalho por plataformas no Brasil"
              link="https://digilabour.com.br/2021/06/07/experiencias-alternativas-no-trabalho-por-plataformas-no-brasil/"
              image="/logo-digilabour.png"
              altImg="logo Digilabour"
            />
          </Stack>
        </Content>
      </Container>
    </Section>
  );
};

export default Media;
