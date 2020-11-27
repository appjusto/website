import { useContext } from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton,
  ModalBody
} from '@chakra-ui/react'

import PageContext from '../context/'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomButton from './CustomButton'

const ModalConfirmation: React.FC = () => {
  const { 
    showModalRecommendation,
    handleModalConfirmation, 
    handleModalRecommendation 
  } = useContext(PageContext)
  function handleSubmit() {
    handleModalConfirmation("recommendation")
    return handleModalRecommendation()
  }
  return (
    <Modal 
      id="ModalConfirmation"
      size="full"
      blockScrollOnMount={true} 
      isOpen={showModalRecommendation} 
      onClose={handleModalRecommendation}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="752px"
          maxH={["620px", null, null, "538px"]}
        >
          <ModalCloseButton 
            border="2px solid black"
            borderRadius="8px"
          />
          <ModalBody 
            pt="32px" 
            pb="32px"
            display="flex"
            flexDir="column"
            alignItems="center"  
          >
            <Flex
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Flex 
                flexDir="row"
                justifyContent="flex-start"
                alignItems="center"  
                mb="8px"
              >
                <Box
                  position="relative"
                  mr="16px"
                >
                  <Image src="/icon-promotion.svg" width={48} height={48} />
                </Box>
                <Heading 
                  as="h2"
                  fontSize="24px"
                  lineHeight="30px"  
                >
                  Indique o AppJusto
                </Heading> 
              </Flex>
              <Text 
                textStyle="p" 
                maxW="560px"
              >
                Agora chegou a hora de divulgar. Quanto mais você divulgar, mais 
                rápido o AppJusto chegará até você!
              </Text>
              <Flex
                w="100%"
                flexDir={["column", null, null, "row"]}
                mb="16px"
              >
                <CustomInput 
                  id="recommendation-name"
                  label="Seu nome" 
                  placeholder="Digite seu nome"
                  m={["0 0 16px 0", null, null, "0 16px 0 0"]}
                />
                <CustomInput 
                  id="recommendation-email"
                  label="Seu e-mail" 
                  placeholder="Digite seu e-mail"
                />
              </Flex>
              <Text 
                textStyle="p"
                fontWeight="700" 
                maxW="560px"
              >
                Indicar para:
              </Text>
              <CustomSelect 
                id="recommended-role"
                label="Selecione o perfil"
                placeholder="Restaurante ou entregador"
                mb="16px" 
              />
              <CustomInput 
                  id="recommended-email"
                  label="E-mail da indicação" 
                  placeholder="Digite o e-mail da sua indicação"
                />
              <CustomButton 
                label="Indicar agora"
                variant="secondary"
                maxW="260px"
                mt="36px"
                handleClick={handleSubmit}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalConfirmation;