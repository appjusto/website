import { Image, Stack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Content from "../../Content";
import SectionHeading from "../../SectionHeading";

const UN: React.FC = () => {
  return (
    <Section id="UN">
      <Container pt="24">
        <Content>
          <SectionHeading>
            O AppJusto colabora com os Objetivos de Desenvolvimento Sustentáveis da ONU
          </SectionHeading>
          <Stack mt="4" w="100%" spacing={4} direction="row">
            <Image src="/ods8.png" w="96px" h="96px" alt="ODS" eagerLoading />
            <Image src="/ods10.png" w="96px" h="96px" alt="ODS" eagerLoading />
            <Image src="/ods11.png" w="96px" h="96px" alt="ODS" eagerLoading />
            <Image src="/ods17.png" w="96px" h="96px" alt="ODS" eagerLoading />
          </Stack>
        </Content>
      </Container>
    </Section>
  );
}

export default UN;
