import Container from "@/components/Container";
import Section from "@/components/Section";
import { Text } from "@chakra-ui/react";
import { CommitmentBox } from "../CommitmentBox";
import { SectionHeader } from "../SectionHeader";
import { S1Topic1 } from "./topic1";
import { S1Topic2 } from "./topic2";
import { S1Topic3 } from "./topic3";
import { S1Topic4 } from "./topic4";
import { S1Topic5 } from "./topic5";
import { S1Topic6 } from "./topic6";

export const Section1 = () => {
  return (
    <Section id="dw-section1" minH="100vh">
      <Container minH="100vh">
        <SectionHeader
          sectionNumber={1}
          title="Remuneração"
          description={
            <Text>
              Garantia que o trabalhador tenha pelo menos{" "}
              <strong>um salário digno</strong> (salário mínimo com base na
              região) descontados os custos/gastos para trabalhar.
            </Text>
          }
        />
        <S1Topic1 />
        <S1Topic2 />
        <S1Topic3 />
        <S1Topic4 />
        <S1Topic5 />
        <S1Topic6 />
        <CommitmentBox
          header="🧭 Compromisso até Junho de 2023"
          body={[
            {
              title:
                "Contribuir com a conscientização sobre o custo do trabalho",
              description:
                "Publicar os dados coletados e disponibilizar uma ferramenta para ajudar os entregadores a calcularem seus próprios custos.",
            },
          ]}
        />
      </Container>
    </Section>
  );
};
