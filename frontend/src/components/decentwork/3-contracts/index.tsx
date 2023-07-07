import { Text } from "@chakra-ui/react";
import { BaseSection } from "../BaseSection";
import { S3Topic1 } from "./topic1";
import { S3Topic2 } from "./topic2";
import { S3Topic3 } from "./topic3";

export const Contracts = () => {
  return (
    <BaseSection.Root id="dw-3-contracts" bgColor="gray.700">
      <BaseSection.Header
        sectionNumber={3}
        title="Contratos"
        description={
          <Text color="white">
            Os termos e condições devem ser acessíveis, legíveis, compreensíveis
            e de acordo com as leis locais. Independentemente da situação, o
            contrato precisa estar isento de cláusulas que excluam
            injustificadamente a responsabilidade por parte da plataforma.
          </Text>
        }
        color="white"
      />
      <BaseSection.Body>
        <S3Topic1 />
        <S3Topic2 />
        <S3Topic3 />
      </BaseSection.Body>
    </BaseSection.Root>
  );
};
