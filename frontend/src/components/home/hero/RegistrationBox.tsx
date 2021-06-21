import { Badge, Flex, Heading, Text, BoxProps, HStack } from "@chakra-ui/react"
import Section from '../../Section';
import Container from '../../Container';
import CustomLinkButton from '../../CustomLinkButton'

interface TopicProps extends BoxProps {
  label: string;
}

const Topic: React.FC<TopicProps> = ({ label, ...props }) => {
  return (
    <Heading as="h2" fontSize="24px" fontWeight="700" lineHeight="26px" {...props}>
      {label}
    </Heading>
  );
};

const RegistrationBox: React.FC = () => {
  // UI
  return (
    <Section
      position={{ base: 'relative', md: 'fixed' }}
      top="0"
      mt={{ base: '-140px', md: '210px', lg: "160px", xl: '180px' }}
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Flex
          flexDir="column"
          w="100%"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="8"
          color="black"
        >
          <HStack spacing={4}>
            <Topic label="Baixe o app" />
            <Badge
              bg="#FFBE00"
              color="black"
              borderRadius="22px"
              px="3"
              py="1"
              fontSize="11px"
              lineHeight="lg"
              fontWeight="700">
                BETA
            </Badge>
          </HStack>
          <Text mt="2" textStyle="p" fontSize="16px" lineHeight="22px">
            Faça o seu cadastro agora mesmo!
          </Text>
          <Topic mt="8" label="Entregadores" />
          <HStack mt="4" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-courier-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="icon-play-store.png"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-courier-ios"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="16px"
              icon="icon-apple.png"
              link="#"
              isExternal={false}
              isDisabled
            />
          </HStack>
          <Topic mt="8" label="Clientes" />
          <HStack mt="4" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-consumer-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="icon-play-store.png"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-consumer-ios"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="16px"
              icon="icon-apple.png"
              link="#"
              isExternal={false}
              isDisabled
            />
          </HStack>
      </Flex>
    </Container>
  </Section>
  );
}

export default RegistrationBox;
