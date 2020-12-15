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

import ShareButton from './ShareButton'

import { usePageContext } from '../context'

const ModalConfirmation: React.FC = () => {
  const { contextState, contextDispatch  } = usePageContext()
  return (
    <Modal 
      id="ModalConfirmation"
      size="full"
      blockScrollOnMount={true} 
      isOpen={contextState.showModalConfirmation.show} 
      onClose={() => contextDispatch(
        { type: "handle_modalConfirmation", payload: ""}
      )}
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
            zIndex="100"
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
                  alt="Ilustração de uma mão entregando uma caixa para outra mão" 
                  width={275} 
                  height={200}
                />
              </Box>
              <Box
                position="relative"
              >
                <Image 
                  src="/obrigado.svg"
                  alt="Obrigado!" 
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
                {
                  contextState.showModalConfirmation.type === "subscribe" ?
                    "Pré-cadastro enviado com sucesso" :
                    "Indicação enviada com sucesso"
                }
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
              <ShareButton bg="#fff"/>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalConfirmation;