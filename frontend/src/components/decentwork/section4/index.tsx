import Container from "@/components/Container";
import Section from "@/components/Section";
import { Text } from "@chakra-ui/react";
import { CommitmentBox } from "../CommitmentBox";
import { SectionHeader } from "../SectionHeader";
import { S4Topic1 } from "./topic1";
import { S4Topic2 } from "./topic2";
import { S4Topic3 } from "./topic3";
import { S4Topic4 } from "./topic4";

export const Section4 = () => {
  return (
    <Section id="dw-section4" minH="100vh">
      <Container minH="100vh" pt="32">
        <SectionHeader
          sectionNumber={4}
          title="Gestão"
          description={
            <Text>
              As plataformas precisam definir regras claras de bloqueio e os
              trabalhadores devem ter o direito de contestação com atendimento
              humano e não podem correr o risco de punição por expressar sua
              opinião ou durante o processo de análise.
            </Text>
          }
        />
        <S4Topic1 />
        <S4Topic2 />
        <S4Topic3 />
        <S4Topic4 />
        <CommitmentBox
          header="🧭 Compromisso até Junho de 2023"
          body={[
            {
              title: "Incluir contato do WhatsApp nos termos de uso",
            },
            {
              title: "Incluir contato do WhatsApp nos termos de uso",
            },
            {
              title: "Criar um formulário de denúncia anti-discriminação",
            },
          ]}
        />
      </Container>
    </Section>
  );
};
