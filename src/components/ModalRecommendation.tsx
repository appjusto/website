import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
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
import { FaWhatsappSquare } from 'react-icons/fa';

import ShareLink from './share/ShareLink';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import FormMessage from './FormMessage';

import { usePageContext, handleMessage, handleRegistration } from '../context/';
import useSharingUrlMsg from './share/useSharingUrlMsg';


const ModalRecommendation: React.FC = () => {
  const [email, setEmail] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { contextState, contextDispatch  } = usePageContext()
  const { mainUrl, sharingMsg } = useSharingUrlMsg()

  const clearForm = () => {
    setEmail("")
    setIsSubmiting(false)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmiting(true)
    /*const registrationStatus = await handleRegistration(
      contextDispatch, 
      "recommendation", 
      email, 
    )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return null
    }*/
    clearForm()
    contextDispatch(
      {type: "handle_modalConfirmation", payload: "recommendation"}
    )
    return contextDispatch({type: "handle_modalRecommendation"})
  }

  const handleClose = () => {
    clearForm()
    handleMessage(contextDispatch, "")
    return contextDispatch({type: "handle_modalRecommendation"})
  }

  return (
    <Modal 
      id="ModalRecommendation"
      size="full"
      blockScrollOnMount={true} 
      isOpen={contextState.showModalRecommendation} 
      onClose={handleClose}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="752px"
          maxH={["100%", null, "480px"]}
          overflow="auto"
        >
          <ModalCloseButton 
            border="2px solid black"
            borderRadius="8px"
          />
          <ModalBody 
            pt={["16px", null, null, "24px"]} 
            pb={["16px", null, null, "60px"]}
            display="flex"
            flexDir="column"
            alignItems="center"  
          >
            <Flex
              as="form"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              onSubmit={handleSubmit}
            >
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                mb="32px"
              >
                <Box
                  position="relative"
                  mr="16px"
                  w={["36px", null, null, "100px"]}
                  h={["36px", null, null, "100px"]}
                >
                  <Image 
                    src="/icon-promotion.svg"
                    alt="Ilustração de auto-falante" 
                    width={100} 
                    height={100} 
                  />
                </Box>
              </Flex>
              <Heading 
                as="h2"
                fontSize={["20px", null, null, "24px"]}
                lineHeight={["22px", null, null, "30px"]}
                mb="8px"  
              >
                Indique o AppJusto
              </Heading> 
              <Text 
                textStyle="p" 
                maxW="560px"
                mb="24px"
              >
                Indique o AppJusto para amigos, entregadores, restaurantes e todos que desejam um modelo mais justo.
              </Text>
              <ShareLink
                link={`https://api.whatsapp.com/send?text=${sharingMsg}%20${mainUrl}`}
                label="Indique por WhatsApp"
                icon={FaWhatsappSquare}
                minHeight="60px"
                maxW={["100%", null, null, "272px"]}
                fontSize="18px"
                lineHeight="26px"
                mb="14px"   
              />
              <Flex
                flexDir={["column", null, "row"]}
                w="100%"
              >
                <CustomInput 
                  type="email"
                  id="recommended-email"
                  label="E-mail da indicação"
                  placeholder="Digite o e-mail da sua indicação"
                  value={email}
                  handleChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  minW="368px"
                />
                <CustomButton 
                  type="submit"
                  label="Indicar agora"
                  variant="secondaryRegistration"
                  maxW="260px"
                  isSubmiting={isSubmiting} 
                />
              </Flex> 
              {
                contextState.registrationMsg.status && 
                contextState.registrationMsg.form === "recommendation" && 
                <FormMessage />
              }
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalRecommendation;