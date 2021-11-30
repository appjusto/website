import { Box, Center, Image, HStack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import { usePageContext } from '../../../context';

interface TestimonialBoxProps {
  image: string;
  handleClick(): void;
}

const TestimonialBox = ({ image, handleClick }: TestimonialBoxProps) => {
  return (
    <Box
      position="relative"
      flex={1}
      minW="312px"
      borderRadius="16px"
      overflow="hidden"
    >
      <Image src={image} />
      <Center
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="200"
        _hover={{ opacity: "0.6" }}
        cursor="pointer"
        onClick={handleClick}
      >
        <Image
          src="/icon-play.svg"
          w="96px"
          h="96px"
        />
      </Center>
    </Box>
  )
}

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
        <HStack mt="10" spacing={{base: 2, md: 4}} h="100%" overflow={{base: 'scroll' , md: 'auto' }}>
          <TestimonialBox
            image="/testimonials1.jpeg"
            handleClick={() => setVideoModalConfig({
              isOpen: true,
              videoId: '9qK8lmLd3w4',
              title: 'Depoimento Jurandir'
            })}
          />
          <TestimonialBox
            image="/testimonials2.jpeg"
            handleClick={() => setVideoModalConfig({
              isOpen: true,
              videoId: 'y7_B4kCI93o',
              title: 'Depoimento Marcos'
            })}
          />
          <TestimonialBox
            image="/testimonials3.jpeg"
            handleClick={() => setVideoModalConfig({
              isOpen: true,
              videoId: 'gbgnLODrEkU',
              title: 'Depoimento Kleber'
            })}
          />
        </HStack>
      </Container>
    </Section>
  );
}

export default Testimonials;
