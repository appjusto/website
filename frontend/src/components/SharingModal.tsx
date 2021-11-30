import {
  Flex,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Heading,
  Text
} from '@chakra-ui/react'
import SharingButtons from './share/SharingButtons'
import { usePageContext } from '../context'

const SharingModal: React.FC = () => {
  const { showSharingModal, setShowSharingModal  } = usePageContext()
  return (
    <Modal
      id="sharing-modal"
      size="xl"
      blockScrollOnMount={true}
      isOpen={showSharingModal}
      onClose={() => setShowSharingModal(false)}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW={[null, null, "690px", "752px"]}
          maxH={[null, null, "538px"]}
        >
          <ModalCloseButton
            zIndex="100"
            _focus={{outline: 'none'}}
          />
          <ModalBody pt="0" pb="60px">
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="relative"
                maxW="260px"
                mr="-120px"
              >
                <Image
                  src="/illustration-big-user.png"
                  alt="Ilustração de uma mão entregando uma caixa para outra mão"
                  width="275px"
                  ignoreFallback
                />
              </Box>
              <Heading
                as="h2"
                fontSize="24px"
                lineHeight="30px"
                textAlign="center"
                mt="32px"
                mb="16px"
              >
                Divulgar o AppJusto
              </Heading>
              <Text
                textStyle="p"
                textAlign="center"
                maxW="560px"
                mb="22px"
              >
                Agora chegou a hora de divulgar. Quanto mais você divulgar, mais rápido o AppJusto chegará até você!
              </Text>
              <SharingButtons />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default SharingModal;
