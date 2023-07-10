import { Text } from "@chakra-ui/react";
import { BaseSection } from "../BaseSection";
import { S5Topic1 } from "./topic1";
import { S5Topic2 } from "./topic2";

export const Representations = () => {
  return (
    <BaseSection.Root id="dw-5-representations" bgColor="lightGray">
      <BaseSection.Header
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
      <BaseSection.Body>
        <S5Topic1 />
        <S5Topic2 />
      </BaseSection.Body>
    </BaseSection.Root>
  );
};
