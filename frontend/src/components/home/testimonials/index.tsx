import { Box, Center, Image, Stack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import { usePageContext } from '../../../context';

const Testimonials: React.FC = () => {
  // context
  const { setVideoModalConfig  } = usePageContext()
  // UI
  return (
    <Section mt="4" id="testimonials" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '8'}} >
        <SectionHeading w="100%" textAlign={{ md: 'center'}}>
          Depoimentos de quem já faz parte da mudança
        </SectionHeading>
        <Stack mt="10" direction={{base: 'column', md: 'row'}} spacing={4} h="100%">
          <Box
            position="relative"
            flex={1}
            borderRadius="16px"
            overflow="hidden"
          >
            <Image src="/testimonials1.jpeg" />
            <Center
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex="200"
            >
              <Image
                src="/icon-play.svg"
                w="96px"
                h="96px"
                _hover={{ opacity: "0.6" }}
                cursor="pointer"
                onClick={() => setVideoModalConfig({
                  isOpen: true,
                  videoId: '9qK8lmLd3w4',
                  title: 'Depoimento Jurandir'
                })}
              />
            </Center>
          </Box>
          <Box
            position="relative"
            flex={1}
            borderRadius="16px"
            overflow="hidden"
          >
            <Image src="/testimonials2.jpeg" />
            <Center
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex="200"
            >
              <Image
                src="/icon-play.svg"
                w="96px"
                h="96px"
                _hover={{ opacity: "0.6" }}
                cursor="pointer"
                onClick={() => setVideoModalConfig({
                  isOpen: true,
                  videoId: 'y7_B4kCI93o',
                  title: 'Depoimento Marcos'
                })}
              />
            </Center>
          </Box>
          <Box
            position="relative"
            flex={1}
            borderRadius="16px"
            overflow="hidden"
          >
            <Image src="/testimonials3.jpeg" />
            <Center
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              zIndex="200"
            >
              <Image
                src="/icon-play.svg"
                w="96px"
                h="96px"
                _hover={{ opacity: "0.6" }}
                cursor="pointer"
                onClick={() => setVideoModalConfig({
                  isOpen: true,
                  videoId: 'gbgnLODrEkU',
                  title: 'Depoimento Kleber'
                })}
              />
            </Center>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Testimonials;
