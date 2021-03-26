import { Text } from '@chakra-ui/react';
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import SharingButtons from '../../share/SharingButtons';
import Content from '../../Content';
import Section from '../../Section';

const Share = () => {
  return (
    <Section id="shareSection">
      <Container pt="24">
        <Content>
          <SectionHeading>Divulgue esse movimento</SectionHeading>
          <Text mb="6">
            Para chegar mais rápido a todas as cidades, o AppJusto precisa da sua ajuda. Divulgue nas suas rede e ajude o movimento a crescer:
          </Text>
          <SharingButtons />
        </Content>
      </Container>
    </Section>
  );
};

export default Share;
