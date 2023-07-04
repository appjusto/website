import Container from "@/components/Container";
import Section from "@/components/Section";
import { Text } from "@chakra-ui/react";
import { SectionHeader } from "../SectionHeader";
import { S5Topic1 } from "./topic1";

export const Representations = () => {
  return (
    <Section id="dw-5-representations" minH="100vh" bgColor="lightGray">
      <Container minH="100vh" pt="40">
        <SectionHeader
          sectionNumber={5}
          title="Representação"
          description={
            <Text>
              Os trabalhadores e trabalhadoras devem poder se organizar em
              entidades coletivas e as plataformas devem estar aptas a negociar
              com elas.
            </Text>
          }
        />
        <S5Topic1 />
      </Container>
    </Section>
  );
};
