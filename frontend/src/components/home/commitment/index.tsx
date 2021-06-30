import { Box, Stack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Item from './Item';
import Content from "../../Content";
import SectionHeading from "../../SectionHeading";
import CustomLinkButton from '../../CustomLinkButton';

const Commitment: React.FC = () => {
  return (
    <Section id="commitment">
      <Container pt="24">
        <Content>
          <SectionHeading>
            Compromissos do AppJusto para uma economia de plataforma mais equilibrada
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
          </Box>
          <Stack mt="8" w="100%" direction={{base: 'column', lg: 'row'}} spacing={4}>
            <CustomLinkButton
              mt="0"
              name="go-to-desk"
              link="https://appjusto.freshdesk.com/"
              linkLabel="Tire suas dúvidas"
              variant="primary"
            />
            <CustomLinkButton
              mt="0"
              name="download-presentation"
              link="https://drive.google.com/file/d/1pMniZvENzeChLN3ERibhKdEHrlq75PZ2/view?usp=sharing"
              linkLabel="Baixe nossa apresentação"
              variant="primary"
            />
          </Stack>
        </Content>
      </Container>
    </Section>
  );
}

export default Commitment;
