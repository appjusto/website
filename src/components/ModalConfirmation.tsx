import { useContext } from 'react'
import Image from 'next/image'
import {
  Flex,
  Box, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton,
  ModalBody,
  Heading,
  Text
} from '@chakra-ui/react'

import PageContext from '../context/'
import ShareButton from './ShareButton'

const ModalConfirmation: React.FC = () => {
  const { showModalConfirmation, handleModals } = useContext(PageContext)
  return (
    <Modal 
      id="ModalConfirmation"
      size="full"
      blockScrollOnMount={true} 
      isOpen={showModalConfirmation} 
      onClose={() => handleModals("confirmation")}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="752px"
          maxH="538px"
        >
          <ModalCloseButton 
            border="2px solid black"
            borderRadius="8px"
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
                  src="/illustration-big-user.svg" 
                  width={275} 
                  height={200}
                />
              </Box>
              <Box
                position="relative"
              >
                <Image 
                  src="/obrigado.svg" 
                  width={213} 
                  height={53}
                />
              </Box>
              <Heading 
                as="h2"
                fontSize="24px"
                lineHeight="30px"
                textAlign="center"
                m="8px 0 16px"  
              >
                Pré-cadastro enviado com sucesso
              </Heading>
              <Text 
                textStyle="p" 
                textAlign="center" 
                maxW="560px"
                mb="40px"
              >
                Agora chegou a hora de divulgar. Quanto mais você divulgar, mais 
                rápido o AppJusto chegará até você!
              </Text>
              <ShareButton />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalConfirmation;