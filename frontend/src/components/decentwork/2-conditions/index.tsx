import { Text } from "@chakra-ui/react";
import { BaseSection } from "../BaseSection";
import { S2Topic1 } from "./topic1";
import { S2Topic2 } from "./topic2";
import { S2Topic3 } from "./topic3";
import { S2Topic4 } from "./topic4";

export const Conditions = () => {
  return (
    <BaseSection.Root id="dw-2-conditions" bgColor="lightGray">
      <BaseSection.Header
        sectionNumber={2}
        title="Condições de trabalho"
        description={
          <Text>
            Assegurar que as plataformas tenham políticas claras de proteção à
            saúde e riscos decorrentes do trabalho.
          </Text>
        }
      />
      <BaseSection.Body>
        <S2Topic1 />
        <S2Topic2 />
        <S2Topic3 />
        <S2Topic4 />
      </BaseSection.Body>
    </BaseSection.Root>
  );
};
