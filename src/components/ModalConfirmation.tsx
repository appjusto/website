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

import SharingBar from './share/SharingBar'

import { usePageContext } from '../context'

import BigUser from '../../public/illustration-big-user.svg'
import Thanks from '../../public/obrigado.svg'

const ModalConfirmation: React.FC = () => {
  const { contextState, contextDispatch  } = usePageContext()
  const { type } = contextState.showModalConfirmation
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
          maxW={[null, null, "690px", "752px"]}
          maxH={[null, null, "538px"]}
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
                  src={BigUser}
                  alt="Ilustração de uma mão entregando uma caixa para outra mão" 
                  width={275} 
                  height={200}
                />
              </Box>
              {
                type !== "sharing" && (
                  <Box
                    position="relative"
                  >
                    <Image 
                      src={Thanks}
                      alt="Obrigado!" 
                      width={213} 
                      height={53}
                    />
                  </Box>
                )
              }
              <Heading 
                as="h2"
                fontSize="24px"
                lineHeight="30px"
                textAlign="center"
                mt={type === "sharing" ? "32px" : "8px"}
                mb="16px"  
              >
                { type === "registration" && "Bem vindo ao movimento ;)" }
                { type === "recommendation" && "Indicação enviada com sucesso" }
                { type === "sharing" && "Divulgar o AppJusto" }
              </Heading>
              <Text 
                textStyle="p" 
                textAlign="center" 
                maxW="560px"
                mb="22px"
              >
                { type === "registration" ? 
                  "Estamos dedicados a construção dessa plataforma, e sua ajuda é fundamental para formar a nossa rede. Você receberá um aviso quando estivermos por perto." 
                  :
                  "Agora chegou a hora de divulgar. Quanto mais você divulgar, mais rápido o AppJusto chegará até você!"
                }
              </Text>
              {
                type === "registration" &&
                <Text 
                  textStyle="p" 
                  fontWeight="700" 
                  mb="22px" 
                  textAlign="center"
                >
                  Quer ajudar mais? Divulgue para amigos, restaurantes e entregadores!
                </Text>
              }
              <SharingBar />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalConfirmation;