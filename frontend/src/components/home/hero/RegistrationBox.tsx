import {
  useEffect, useRef, ChangeEvent, FormEvent, useState
}from 'react'
import { Box, Flex, Heading, Text, BoxProps, HStack, Button } from "@chakra-ui/react"
import FormMessage from '../../FormMessage'
import { usePageContext } from '../../../context'
import { modalConfOptions } from '../../ModalConfirmation'
import CustomInput from '../../CustomInput'
import Image from '../../Image';
import Section from '../../Section';
import Container from '../../Container';
import CustomLinkButton from '../../CustomLinkButton'

interface TopicProps extends BoxProps {
  label: string;
}

const Topic: React.FC<TopicProps> = ({ label, ...props }) => {
  return (
    <HStack spacing={4} alignItems="center" {...props}>
      <Image src="/green-check.svg" width="24px" height="32px" eagerLoading/>
      <Box color="black">
        <Heading as="h2" fontSize="24px" fontWeight="700" lineHeight="26px">
          {label}
        </Heading>
      </Box>
    </HStack>
  );
};

const RegistrationBox: React.FC = () => {
  // context
  const { contextState, contextDispatch, handleRegistration } = usePageContext()
  // state
  //const [profile, setProfile] = useState("couriers")
  //const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  //const [validation, setValidation] = useState({ phone: true })
  const [pageLimit, setPageLimit] = useState(false)

  const isMountedRef = useRef(false);
  // hadlers
  const handleScroll = () => {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if(width > 1000) {
      if (document.documentElement.scrollTop > 4200) {
        setPageLimit(true)
      } else {
        setPageLimit(false)
      }
    }
  }

  const clearForm = () => {
    //setProfile("couriers")
    //setPhone("")
    setEmail("")
  }

  /*const handleValidation = async (field: string, value: boolean) => {
    setValidation(prevState => ({...prevState, [field]: value}))
  }*/

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    /*if(
      !validation.phone
      ) {
      return handleMessage(
        contextDispatch,
        "Favor preencher corretamente os campos acima.",
        "registration"
      )
    }*/
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(
      'consumers',
      'Não_informado',
      'Não_informado', //`${city}-${uf}`
      email
    )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return;
    }
    clearForm()
    return contextDispatch({
      type: "handle_modalConfirmation", payload: modalConfOptions.registration
    })
  }

  // side effects
  useEffect(() => {
    isMountedRef.current = true
    return () => isMountedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener("scroll", handleScroll)
  }, [])

  // UI
  return (
    <Section
      position={{ base: 'relative', md: 'fixed' }}
      top={{ md: pageLimit ? undefined : '0' }}
      bottom={{ md: pageLimit ? '246px' : undefined }}
      mt={{ base: '-140px', md: '210px', lg: "160px", xl: '160px' }}
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Flex
          flexDir="column"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="8"
          color="black"
        >
          <Topic label="Entregadores" />
          <Text mt="2" textStyle="p" fontSize="16px" lineHeight="22px">
            Baixe o nosso app e faça seu cadastro agora!
          </Text>
          <HStack mt="2" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="icon-play-store.png"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.courier.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-android"
              linkLabel="Em breve"
              variant="disabled"
              fontSize="16px"
              icon="icon-apple.png"
              link="#"
              isExternal={false}
              isDisabled
            />
          </HStack>
          <Flex
            as="form"
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <Topic label="Clientes" mt="12" />
            <Text mt="2" textStyle="p" fontSize="16px" lineHeight="22px">
              Disponível em breve. Deixe seu e-mail para ser avisado e faça
              parte do movimento:
            </Text>
            <Box position="relative">
              <CustomInput
                mt="12px"
                type="email"
                id="registration-email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={email}
                handleChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                minW={[null, null, "300px"]}
                isRequired
              />
              <Button
                pos="absolute"
                top="22px"
                right="20px"
                type="submit"
                border="none"
                bg="none"
                w="60px"
                color="Black"
                textStyle="p"
                fontSize="16px"
                lineHeight="22px"
                fontWeight="700"
                zIndex="999"
                isLoading={isSubmiting}
                loadingText="Enviando"
                >
                  Enviar
                </Button>
            </Box>
          </Flex>
          {
            contextState?.registrationMsg.status &&
            contextState.registrationMsg.form === "registration" &&
            <FormMessage />
          }
      </Flex>
    </Container>
  </Section>
  );
}

export default RegistrationBox;
