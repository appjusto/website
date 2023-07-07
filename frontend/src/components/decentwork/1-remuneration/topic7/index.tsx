import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S1Topic7 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box w="100%">
          <SectionTopic
            section="REMUNERAÇÃO"
            topic="Conscientização sobre o custo do trabalho"
          />
          <Text mt="6" fontWeight="semibold">
            Você sabe quanto realmente ganha para fazer entregas?
          </Text>
          <Text mt="6">
            Para contribuir com a conscientização dos custos do trabalho, o
            AppJusto criou uma ferramenta para ajudar a calcular os custos e
            ganhos por corrida e por hora. Também publicamos o{" "}
            <Link
              href="https://docs.google.com/spreadsheets/d/1aFRRIYwyBWkVYntWCnRzOvCOp6KatkhzK-JYMJ5EYFA/edit#gid=1213288831"
              fontWeight="semibold"
              textDecor="underline"
              isExternal
            >
              resultado de uma pesquisa
            </Link>{" "}
            que fizemos com 120 pessoas que fazem entrega.
          </Text>
          <Link
            w="100%"
            _focus={{ outline: "none" }}
            _hover={{ textDecor: "none" }}
            href="https://app.formbricks.com/s/cljhapmud03t8ql0hbpny6bu0"
            isExternal
          >
            <Button
              mt="6"
              w="fit-content"
              variant="outlineDark"
              px="10"
              fontSize="sm"
            >
              Calcule seus ganhos
            </Button>
          </Link>
        </Box>
        <Center w="100%" display={{ base: "none", md: "flex" }}>
          <Image
            src="/dw/section1-img5.png"
            alt="formulário de denúncia"
            maxW={{ md: "280px", lg: "420px" }}
          />
        </Center>
      </Flex>
    </BaseTopic>
  );
};
