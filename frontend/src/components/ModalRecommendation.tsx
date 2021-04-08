import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
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
} from '@chakra-ui/react';
import { FaWhatsappSquare } from 'react-icons/fa';

import ShareLink from './share/ShareLink';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import FormMessage from './FormMessage';
import Image from './Image';

import { usePageContext, handleMessage } from '../context/';
import useSharingUrlMsg from './share/useSharingUrlMsg';

import { modalConfOptions } from './ModalConfirmation';

const ModalRecommendation: React.FC = () => {
  const [email, setEmail] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const inputRef = useRef(null);
  const {
    contextState,
    contextDispatch,
    handleIndication
  } = usePageContext()
  const { sharingMsg } = useSharingUrlMsg()

  const clearForm = () => {
    setEmail("")
    setIsSubmiting(false)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmiting(true)
    const indicationStatus = await handleIndication(email)
    setIsSubmiting(false)
    if(!indicationStatus) {
      return null
    }
    clearForm()
    contextDispatch(
      {type: "handle_modalConfirmation", payload: modalConfOptions.recommendation}
    )
    return contextDispatch({type: "handle_modalRecommendation"})
  }

  const handleClose = () => {
    clearForm()
    handleMessage(contextDispatch, "")
    return contextDispatch({type: "handle_modalRecommendation"})
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current])

  return (
    <Modal
      id="ModalRecommendation"
      size="full"
      blockScrollOnMount={true}
      isOpen={contextState?.showModalRecommendation || false}
      onClose={handleClose}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW={[null, null, "690px", "752px"]}
          maxH={[null, null, "480px"]}
          overflow="hidden"
          display="flex"
          alignItems="center"
        >
          <ModalCloseButton _focus={{outline: 'none'}}/>
          <ModalBody
            p="24px"
            display="flex"
            flexDir="column"
            alignItems="center"
            maxW={[null, null, null, "560px"]}
          >
            <Flex
              as="form"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              w="100%"
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
                  w={["60px", null, "80px"]}
                  h={["60px", null, "80px"]}
                >
                  <Image
                    src="/icon-promotion.svg"
                    alt="Ilustração de auto-falante"
                    width="100%"
                    eagerLoading
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
                mb="22px"
              >
                Indique o AppJusto para amigos, entregadores, restaurantes e todos que desejam um modelo mais justo.
              </Text>
              <ShareLink
                link={`https://api.whatsapp.com/send?text=${sharingMsg}`}
                label="Indique por WhatsApp"
                icon={FaWhatsappSquare}
                indication={true}
                justifyContent="flex-start"
                minHeight="60px"
                maxW={["100%", null, "272px"]}
                p="0 16px"
                fontSize="18px"
                lineHeight="26px"
                fontWeight="700"
                mb="12px"
              />
              <Flex
                flexDir={["column", null, "row"]}
                w="100%"
              >
                <CustomInput
                  ref={inputRef}
                  type="email"
                  id="recommended-email"
                  label="E-mail da indicação"
                  placeholder="Digite o e-mail da sua indicação"
                  value={email}
                  handleChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  minW={[null, null, "340px"]}
                  mb={["16px", null, "0"]}
                />
                <CustomButton
                  type="submit"
                  label="Indicar agora"
                  variant="secondaryRegistration"
                  maxW={["100%", null, "260px"]}
                  ml={[null, null, "16px", "0"]}
                  isSubmiting={isSubmiting}
                />
              </Flex>
              {
                contextState?.registrationMsg.status &&
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
