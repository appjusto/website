import { Center, Image, HStack} from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import React from 'react';

const Un: React.FC = () => {
  // UI
  return (
    <Section mt="4" id="un" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} overflow="hidden">
        <Center>
          <Image src="/icon-splash.svg" alt="ilustração splash" />
        </Center>
        <SectionHeading display={{base: 'none', md: 'block'}} mt="8" w="100%" textAlign="center">
          Colaboramos com os Objetivos de Desenvolvimento Sustentáveis da ONU
        </SectionHeading>
        <SectionHeading display={{base: 'block', md: 'none'}} mt="8" w="100%" textAlign="center">
          Colaboramos com os Objetivos da ONU
        </SectionHeading>
        <Center mt="8">
          <HStack>
            <Image src="/ods8.png" w="90px" h="90px" alt="ODS 8" />
            <Image src="/ods10.png" w="90px" h="90px" alt="ODS 10" />
          </HStack>
        </Center>
      </Container>
    </Section>
  );
}

export default Un;
