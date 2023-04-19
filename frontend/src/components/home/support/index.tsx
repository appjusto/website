import {
  Center,
  CenterProps,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Section from "../../Section";
import Container from "../../Container";
import SectionHeading from "../../SectionHeading";
import React from "react";
import { NextLink } from "src/components/NextLink";

const CustomCenter: React.FC<CenterProps> = (props) => {
  return (
    <Center
      w={{ base: "100%", md: "160px" }}
      h={{ base: "auto", md: "120px" }}
      {...props}
    />
  );
};

const Support: React.FC = () => {
  // UI
  return (
    <Section mt="4" id="support" h="auto">
      <Container
        pt={{ base: "8", lg: "16" }}
        pb={{ base: "10", lg: "8" }}
        overflow="hidden"
      >
        <SectionHeading
          w="100%"
          textAlign="center"
          maxW={{ base: "321px", md: "unset" }}
        >
          Veja quem já apoia essa causa
        </SectionHeading>
        <Text
          display={{ base: "none", md: "block" }}
          mt="6"
          textAlign={{ md: "center" }}
        >
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas,
          entre sócios, colaboradores e voluntários.{" "}
          <NextLink href="/conheca-a-rede" textDecor="underline">
            Conheça toda a nossa rede
          </NextLink>
        </Text>
        <NextLink
          mt="8"
          href="/conheca-a-rede"
          display={{ base: "block", md: "none" }}
          textDecor="underline"
          fontSize="18px"
          lineHeight="26px"
          fontWeight="500"
          textAlign="center"
        >
          Conheça toda a nossa rede
        </NextLink>
        <Center>
          <Wrap
            mt="10"
            maxW="960px"
            spacing={{ base: "30px", lg: "40px" }}
            justify="center"
          >
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-abrasel.png" alt="logo abrasel" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-anr.png" alt="logo anr" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image
                  src="/logo-coletivo-pinheiros.png"
                  alt="logo pinheiros"
                />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-iugu.png" alt="logo iugu" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-iza.png" alt="logo iza" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-99jobs.png" alt="logo 99jobs" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-dinamo.png" alt="logo dinamo" />
              </CustomCenter>
            </WrapItem>
            <WrapItem>
              <CustomCenter>
                <Image src="/logo-kria.png" alt="logo kria" />
              </CustomCenter>
            </WrapItem>
          </Wrap>
        </Center>
      </Container>
    </Section>
  );
};

export default Support;
