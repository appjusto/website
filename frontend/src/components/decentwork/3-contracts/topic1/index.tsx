import { Box, Center, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S3Topic1 = () => {
  return (
    <BaseTopic>
      <Center>
        <Box maxW="545px">
          <SectionTopic
            section="CONTRATOS"
            topic="Notificamos mudanças de termos via e-mail"
            color="white"
          />
          <Text mt="6" color="white">
            Nosso compromisso, que inclusive está registrado nos termos de uso,
            é de notificar as mudanças de termos pelo menos dois dias antes da
            alteração.
          </Text>
        </Box>
      </Center>
    </BaseTopic>
  );
};
