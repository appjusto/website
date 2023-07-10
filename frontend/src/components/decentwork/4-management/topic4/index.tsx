import { Span } from "@/components/Span";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic4 = () => {
  return (
    <BaseTopic>
      <Center
        display={{ base: "flex", lg: "none" }}
        mb={{ base: "-16", lg: "0" }}
      >
        <Image
          mt="8"
          w="120px"
          src="/dw/section4-img2.png"
          alt="pequeno rabisco amarelo"
        />
      </Center>
    </BaseTopic>
  );
};
