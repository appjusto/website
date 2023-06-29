import Container from "@/components/Container";
import Section from "@/components/Section";
import { Text } from "@chakra-ui/react";
import { CommitmentBox } from "../CommitmentBox";
import { SectionHeader } from "../SectionHeader";
import { S2Topic1 } from "./topic1";
import { S2Topic2 } from "./topic2";
import { S2Topic3 } from "./topic3";
import { S2Topic4 } from "./topic4";

export const Conditions = () => {
  return (
    <Section id="dw-2-conditions" minH="100vh" bgColor="lightGray">
      <Container minH="100vh" pt="32">
        <SectionHeader
          sectionNumber={2}
          title="Condições de trabalho"
          description={
            <Text>
              Assegurar que as plataformas tenham políticas claras de proteção à
              saúde e riscos decorrentes do trabalho.
            </Text>
          }
        />
        <S2Topic1 />
        <S2Topic2 />
        <S2Topic3 />
        <S2Topic4 />
        <CommitmentBox
          header="🧭 Compromisso até Agosto de 2023"
          body={[
            {
              title:
                "Disparo de alertas entregas rápidas ou número excessivo de entregas por dia",
              description:
                "Enviaremos notificação para ajudar a conscientizar quando a entrega for feita antes do tempo estimado e quando o entregador chegar ao número de 15 corridas no dia.",
            },
          ]}
        />
      </Container>
    </Section>
  );
};
