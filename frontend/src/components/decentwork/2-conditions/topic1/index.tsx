import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S2Topic1 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box maxW={{ md: "360px", lg: "620px" }}>
          <SectionTopic
            section="CONDIÇÕES"
            topic="O AppJusto exige que os entregadores tenham MEI"
          />
          <Text mt="6">
            Como forma de mitigar alguns dos riscos específicos da atividade dos
            entregadores, como por exemplo, risco de acidentes e lesões, o
            AppJusto exige que os entregadores sejam inscritos como MEI, o que
            confere aos entregadores diversos direitos.
          </Text>
          <Text mt="6" fontWeight="semibold">
            Atenção: os direitos básicos do MEI só podem ser garantidos para
            profissionais que têm todas as mensalidades do MEI pagas.
          </Text>
          <Link
            w="100%"
            _focus={{ outline: "none" }}
            _hover={{ textDecor: "none" }}
            href="https://appjusto.freshdesk.com/support/solutions/articles/67000681987"
            isExternal
          >
            <Button
              mt="6"
              w="fit-content"
              variant="outlineDark"
              px="10"
              fontSize="sm"
            >
              Saiba mais
            </Button>
          </Link>
        </Box>
        <Box ml={{ base: "0", md: "6" }} mt={{ base: "6", md: "0" }} p="6">
          <Wrap spacing={6} justify="center">
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Aposentadoria por idade
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Salário-maternidade
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Auxílio-doença
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Aposentadoria por invalidez
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Auxílio-reclusão
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight="semibold"
            >
              Pensão por morte
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </BaseTopic>
  );
};
