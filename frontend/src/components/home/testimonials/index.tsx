import { Box, Image, Stack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';

const Testimonials: React.FC = () => {
  // UI
  return (
    <Section mt={{ base: '8', lg: '4'}} id="testimonials" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} >
        <SectionHeading w="100%" textAlign={{ md: 'center'}}>
          Depoimentos de quem já faz parte da mudança
        </SectionHeading>
        <Stack mt="10" direction={{base: 'column', md: 'row'}} spacing={4} h="100%">
          <Box flex={1} borderRadius="16px" overflow="hidden">
            <Image src="/testimonials1.jpeg" />
          </Box>
          <Box flex={1} borderRadius="16px" overflow="hidden">
            <Image src="/testimonials2.jpeg" />
          </Box>
          <Box flex={1} borderRadius="16px" overflow="hidden">
            <Image src="/testimonials3.jpeg" />
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Testimonials;
