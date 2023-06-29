import Container from "@/components/Container";
import Section from "@/components/Section";
import { Text } from "@chakra-ui/react";
import { CommitmentBox } from "../CommitmentBox";
import { SectionHeader } from "../SectionHeader";
import { S3Topic1 } from "./topic1";
import { S3Topic2 } from "./topic2";

export const Contracts = () => {
  return (
    <Section id="dw-3-contracts" minH="100vh" bgColor="gray.700">
      <Container minH="100vh" pt="32">
        <SectionHeader
          sectionNumber={3}
          title="Contratos"
          description={
            <Text color="white">
              Os termos e condições devem ser acessíveis, legíveis,
              compreensíveis e de acordo com as leis locais. Independentemente
              da situação, o contrato precisa estar isento de cláusulas que
              excluam injustificadamente a responsabilidade por parte da
              plataforma.
            </Text>
          }
          color="white"
        />
        <S3Topic1 />
        <S3Topic2 />
        <CommitmentBox
          header="🧭 Compromisso até Agosto de 2023"
          body={[
            {
              title:
                'Criar "Visual Law” detalhando os pontos mais críticos dos termos de uso',
              description:
                "Faremos gráficos e fluxos contemplando os seguintes pontos: fluxo de recebimento, fluxo de contestação de bloqueios, fluxo de aprovação do cadastro e compromissos chave.",
            },
            {
              title: "Notificações previamente sobre mudança nos termos de uso",
              description:
                "Envio de e-mail e notificação de push alertando da mudança pelo menos dois dias antes da alteração de fato.",
            },
            {
              title:
                "Extração de histórico de corridas pelo próprio aplicativo",
              description:
                "Permitir que o histórico de corridas (data de início e término, valor recebido, avaliação do serviço) possa ser baixado pelo próprio aplicativo, sem a necessidade de solicitação ao suporte.",
            },
          ]}
        />
      </Container>
    </Section>
  );
};
