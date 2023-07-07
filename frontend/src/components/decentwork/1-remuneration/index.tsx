import { Text } from "@chakra-ui/react";
import { BaseSection } from "../BaseSection";
import { S1Topic1 } from "./topic1";
import { S1Topic2 } from "./topic2";
import { S1Topic3 } from "./topic3";
import { S1Topic4 } from "./topic4";
import { S1Topic5 } from "./topic5";
import { S1Topic6 } from "./topic6";
import { S1Topic7 } from "./topic7";

export const Remuneration = () => {
  return (
    <BaseSection.Root id="dw-1-remuneration">
      <BaseSection.Header
        sectionNumber={1}
        title="Remuneração"
        description={
          <Text>
            Garantia que o entregador ou entregadora receba pelo menos um{" "}
            <strong>salário mínimo</strong> já descontados seus custos/gastos
            para trabalhar.
          </Text>
        }
      />
      <BaseSection.Body>
        <S1Topic1 />
        <S1Topic2 />
        <S1Topic3 />
        <S1Topic4 />
        <S1Topic5 />
        <S1Topic6 />
        <S1Topic7 />
      </BaseSection.Body>
    </BaseSection.Root>
  );
};
