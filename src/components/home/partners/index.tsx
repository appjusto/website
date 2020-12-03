import { Flex, Box, Stack, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'
import Container from "../../Container";
import Section from "../../Section";
import CustomButton from '../../CustomButton'
import Link from '../../CustomLink'
import PartnerBox from './PartnerBox';
import CallBox from './CallBox';


const Partners: React.FC = () => {
  return (
    <Section
      id="partners"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pb={["62px", null, null, "64px"]} 
      >
        <Heading 
          as="h2"
          mb="24px"
        >
          Quem está com a gente nessa:
        </Heading>
        <Stack 
          w="100%"
          direction="row"
          spacing={2}
          overflowX="auto"
          p="8px 0"
          mb="24px"
        >
          <PartnerBox image="/logoAbrasel.png" width={147} height={64} />
          <PartnerBox image="/logoIugu.png" width={132} height={54} />
          <PartnerBox image="/logoColetivoPinheiros.png" width={107} height={105} />
          <CallBox />
        </Stack>
        <Text
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
        >
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas, 
          entre sócios, colaboradores e voluntários.
        </Text>
        <Link 
          link="/conheca-a-rede"
          linkLabel="Conheça a nossa rede completa"
          internal={true}
          fontSize="18px"
          lineHeight="26px"
          fontWeight="700"
        />
        <Heading 
          as="h2"
          m="66px 0 8px"
        >
          Estamos em busca de mais apoio.
          <Box 
            position="relative"
            maxW={["164px", null, "200px", "360px"]}
            mt={["-26px", null, "-30px", "-26px"]}
            ml={["0", null, "340px", "180px"]}
            color="white"
          >
            <Image 
              src="/line-vector-g.svg" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Text 
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
          mb="32px"
        >
          O AppJusto está em fase de captação de investimentos e montando uma rede 
          de apoiadores por todo país. Quer nos ajudar nessa missão?
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
          w="100%"
        >
          <CustomButton 
            label="Entre em contato" 
            variant="secondaryLight"
            maxW={["100%", null, "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomButton 
            label="Quero ser um parceiro" 
            variant="white"    
            maxW={["100%", null, "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomButton 
            label="Quero trabalhar com vocês" 
            variant="white"    
            maxW={["100%", null, "220px"]}
          />
        </Flex>
      </Container>
    </Section>
  );
}

export default Partners;