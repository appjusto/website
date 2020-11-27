import { useState, useContext } from 'react'
import Image from 'next/image'
import {
  Flex,
  Box,
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

import { profileOptions } from './home/hero/RegistrationBox'

const ModalRecommendation: React.FC = () => {
  const { 
    showModalRecommendation,
    handleModalConfirmation, 
    handleModalRecommendation 
  } = useContext(PageContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [recommendedProfile, setRecommendedProfile] = useState("")
  const [recommendedEmail, setRecommendedEmail] = useState("")

  function handleSubmit() {
    handleModalConfirmation("recommendation")
    return handleModalRecommendation()
  }
  return (
    <Modal 
      id="ModalRecommendation"
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
                  value={name}
                  handleChange={(event) => setName(event.target.value)}
                />
                <CustomInput 
                  id="recommendation-email"
                  label="Seu e-mail" 
                  placeholder="Digite seu e-mail"
                  value={email}
                  handleChange={(event) => setEmail(event.target.value)}
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
                id="recommended-profile"
                label="Selecione o perfil"
                placeholder="Restaurante ou entregador"
                mb="16px"
                value={recommendedProfile} 
                options={profileOptions}
                handleChange={(event) => setRecommendedProfile(event.target.value)}
              />
              <CustomInput 
                  id="recommended-email"
                  label="E-mail da indicação" 
                  placeholder="Digite o e-mail da sua indicação"
                  value={recommendedEmail}
                  handleChange={(event) => setRecommendedEmail(event.target.value)}
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

export default ModalRecommendation;