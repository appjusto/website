import { Text } from "@chakra-ui/react";
import Container from "../../../Container";
import Content from "../../../Content";
import Section from "../../../Section";
import SectionHeading from "../../../SectionHeading";
import SharingButtons from "../../../share/SharingButtons";

const Share = () => {
  return (
    <Section id="shareSection">
      <Container pt="24">
        <Content>
          <SectionHeading>Com sua ajuda iremos mais longe!</SectionHeading>
          <Text mb="6" textStyle="p">
            Para sermos uma alternativa viável no delivery de plataforma,
            precisamos alcançar o maior número possível de pessoas. Ajude
            divulgando a nossa proposta:
          </Text>
          <SharingButtons />
        </Content>
      </Container>
    </Section>
  );
};

export default Share;
