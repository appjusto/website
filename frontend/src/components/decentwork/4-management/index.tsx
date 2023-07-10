import { Text } from "@chakra-ui/react";
import { BaseSection } from "../BaseSection";
import { S4Topic1 } from "./topic1";
import { S4Topic2 } from "./topic2";
import { S4Topic3 } from "./topic3";

export const Management = () => {
  return (
    <BaseSection.Root
      id="dw-4-management"
      minH="100vh"
      zIndex="2"
      bgColor="white"
    >
      <BaseSection.Header
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
      <BaseSection.Body>
        <S4Topic1 />
        <S4Topic2 />
        <S4Topic3 />
      </BaseSection.Body>
    </BaseSection.Root>
  );
};
