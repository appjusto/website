import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  StackProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text
} from '@chakra-ui/react'
import { usePageContext } from '../context'
import CustomLinkButton from './CustomLinkButton'

interface TopicProps extends StackProps {
  label: string;
  imageSrc: string;
}

const Topic: React.FC<TopicProps> = ({ label, imageSrc, ...props }) => {
  return (
    <Stack direction="row" spacing={2} mb="4" align="center" {...props}>
      <Image src={imageSrc} w="18px" h="20px" />
      <Heading as="h2" fontSize="20px" fontWeight="700" lineHeight="26px">
        {label}
      </Heading>
    </Stack>
  );
};

const AppsModal: React.FC = () => {
  const { showAppsModal, setShowAppsModal  } = usePageContext()
  return (
    <Modal
      id="sharing-modal"
      size="md"
      blockScrollOnMount={true}
      isOpen={showAppsModal}
      onClose={() => setShowAppsModal(false)}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent w={{base: '90%', md: '328px' }} borderRadius="16px">
          <ModalCloseButton
            bg="white !important"
            zIndex="100"
            _focus={{outline: 'none'}}
          />
          <ModalBody p="10">
            <Flex
              flexDir="column"
              w="100%"
            >
              <Stack direction="row" spacing={2} align="center">
                <Text fontSize="36px" lineHeight="43.2px" fontWeight="700">
                  Baixar app
                </Text>
                <Badge
                  bg="#FFBE00"
                  color="black"
                  borderRadius="22px"
                  px="3"
                  py="1"
                  h="23px"
                  fontSize="11px"
                  lineHeight="lg"
                  fontWeight="700">
                    BETA
                </Badge>
              </Stack>
              <Topic mt="10" label="Consumidores" imageSrc="/emoji-pizza.png" />
              <Stack w="100%" direction="column" spacing={2}>
                <CustomLinkButton
                  mt="0"
                  name="app-consumer-android"
                  linkLabel="Android"
                  variant="primary"
                  fontSize="16px"
                  icon="icon-play-store.png"
                  iconAlt="ícone play store"
                  link="https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live"
                  isExternal
                />
                <CustomLinkButton
                  mt="0"
                  name="app-consumer-ios"
                  linkLabel="iPhone"
                  variant="primary"
                  fontSize="16px"
                  icon="icon-apple-black.png"
                  iconAlt="ícone apple store"
                  link="https://apps.apple.com/br/app/appjusto/id1569067601"
                  isExternal
                />
              </Stack>
              <Topic mt="10" label="Entregadores" imageSrc="/emoji-motoca.png" />
              <CustomLinkButton
                mt="0"
                name="app-courier-android"
                linkLabel="Android"
                variant="primary"
                fontSize="16px"
                icon="icon-play-store.png"
                iconAlt="ícone play store"
                link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
                isExternal
              />
              <Box mt="10" fontSize="16px" lineHeight="22px" fontWeight="500">
                <Text>Para cadastrar seu <Text as="span" fontWeight="700">Restaurante</Text>,</Text>
                <Link href="https://admin.appjusto.com.br" textDecor="underline">clique aqui.</Link>
              </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AppsModal;
