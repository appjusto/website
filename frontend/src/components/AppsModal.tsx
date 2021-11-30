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
  const { showAppsModal, setShowAppsModal, storeLink  } = usePageContext()
  return (
    <Modal
      id="apps-modal"
      size="md"
      blockScrollOnMount={true}
      isOpen={showAppsModal}
      onClose={() => setShowAppsModal(false)}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent w={{base: '95%', md: '328px' }} borderRadius="24px">
          <ModalCloseButton
            bg="white !important"
            zIndex="100"
            _focus={{outline: 'none'}}
          />
          <ModalBody pt="10" px="10" pb="16">
            <Flex
              flexDir="column"
              w="100%"
            >
              <Stack direction="row" spacing={2} align="center">
                <Text fontSize="36px" lineHeight="43.2px" fontWeight="700">
                  Faça parte
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
              <Topic mt="6" label="Restaurantes" imageSrc="/emoji-restaurante.png" />
              <CustomLinkButton
                size="lg"
                w="100%"
                linkLabel="Cadastre seu restaurante"
                variant="tertiary"
                fontSize="16px"
                link="https://admin.appjusto.com.br"
                isExternal
              />
              <Topic mt="6" label="Consumidores" imageSrc="/emoji-pizza.png" />
              <CustomLinkButton
                size="lg"
                w="100%"
                linkLabel="Baixe o App e faça um pedido"
                variant="primary"
                fontSize="16px"
                link={storeLink}
                isExternal
              />
              <Topic mt="6" label="Entregadores" imageSrc="/emoji-motoca.png" />
              <CustomLinkButton
                size="lg"
                w="100%"
                linkLabel="Cadastre-se como entregador"
                variant="secondary"
                fontSize="16px"
                link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
                isExternal
              />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AppsModal;
