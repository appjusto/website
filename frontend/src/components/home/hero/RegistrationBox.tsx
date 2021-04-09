import {
  useEffect, useRef, ChangeEvent, FormEvent, useState
}from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import CustomPhoneInput from '../../CustomPhoneInput'
import CustomSelect from "../../CustomSelect"
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'
import { usePageContext, handleMessage } from '../../../context'
import { profileOptions } from '../../../utils'
import { modalConfOptions } from '../../ModalConfirmation'
import CustomInput from '../../CustomInput'
import Image from '../../Image';
import Section from '../../Section';
import Container from '../../Container';

const RegistrationBox: React.FC = () => {
  // context
  const { contextState, contextDispatch, handleRegistration } = usePageContext()
  // state
  const [profile, setProfile] = useState("couriers")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [validation, setValidation] = useState({ phone: true })
  const [pageLimit, setPageLimit] = useState(false)

  const isMountedRef = useRef(false);
  // hadlers
  const handleScroll = () => {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if(width > 1000) {
      if (document.documentElement.scrollTop > 3300) {
        setPageLimit(true)
      } else {
        setPageLimit(false)
      }
    }
  }

  const clearForm = () => {
    setProfile("couriers")
    setPhone("")
    setEmail("")
  }

  const handleValidation = async (field: string, value: boolean) => {
    setValidation(prevState => ({...prevState, [field]: value}))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if(
      !validation.phone
      ) {
      return handleMessage(
        contextDispatch,
        "Favor preencher corretamente os campos acima.",
        "registration"
      )
    }
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(
      profile,
      phone,
      'Não_informado', //`${city}-${uf}`
      email
    )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return null
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
      mt={{ base: '-140px', md: '80px' }}
      zIndex="800"
    >
      <Container pt="0" display="flex" justifyContent="flex-end">
        <Flex
          flexDir="column"
          maxW="370px"
          bg="white"
          border="1px solid #C8D7CB"
          p="24px"
          color="black"
        >
          <Box position="relative" width="84px" mt="-50px">
            <Image src="/big-delivery.svg" />
          </Box>
          <Heading mt="3" as="h2" fontSize="24px" lineHeight="28.8px" maxW="290px">
            Faça o pré-cadastro agora e entre nesse movimento!
          </Heading>
          <Flex
            mt="12px"
            as="form"
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <CustomSelect
              id="subscribe-profile"
              label="Perfil"
              placeholder="Selecione seu perfil"
              value={profile}
              handleChange={
                (event: ChangeEvent<HTMLSelectElement>) =>
                  setProfile(event.target.value)
              }
              options={profileOptions}
            />
            <CustomPhoneInput
              mt="12px"
              name="phone"
              id="subscribe-phone"
              label="Celular"
              placeHolder="Digite seu celular"
              value={phone}
              handleChange={(value: string) => setPhone(value)}
              notifyValidation={handleValidation}
            />
            <CustomInput
              mt="12px"
              type="email"
              id="registration-email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              handleChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              minW={[null, null, "300px"]}
            />
            <CustomButton
              mt="3"
              type="submit"
              label="Fazer pré-cadastro"
              variant="secondaryRegistration"
              isSubmiting={isSubmiting}
            />
          </Flex>
          {
            !contextState?.registrationMsg.status && (
              <Text mt="12px" fontSize="xs" lineHeight="lg">
                Ao fazer o pré-cadastro, você autoriza o envio de nossas comunicações para o número cadastrado.
              </Text>
            )
          }
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
