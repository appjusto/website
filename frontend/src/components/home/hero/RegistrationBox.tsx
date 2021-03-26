import {
  useReducer, useEffect, useRef, ChangeEvent, FormEvent
}from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

import CustomPhoneInput from '../../CustomPhoneInput'
import CustomSelect from "../../CustomSelect"
//import CustomComboInput from '../../CustomComboInput'
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'

import { usePageContext, handleMessage } from '../../../context'

import { ufsList, getCities, profileOptions } from '../../../utils'

import { registrationReducer, Actions } from '../../../reducers/registrationReducer'

import { modalConfOptions } from '../../ModalConfirmation'
import CustomInput from '../../CustomInput'
import Image from '../../Image';
import Section from '../../Section';
import Container from '../../Container';

const initialState = {
  profile: "couriers",
  phone: "",
  uf: "",
  city: "",
  email: "",
  isLoadingCities: false,
  citiesList: [],
  isSubmiting: false,
  fixedHeader: false,
  fieldsAreValid: { phone: true, uf: true, city: true }
}

const RegistrationBox: React.FC = () => {
  const [state, unsafeDispatch] = useReducer(registrationReducer, initialState)
  const {
    profile,
    phone,
    uf,
    //city,
    email,
    //isLoadingCities,
    //citiesList,
    isSubmiting,
    fixedHeader,
  } = state
  const { contextState, contextDispatch, handleRegistration } = usePageContext()
  const isMountedRef = useRef(false);

  const dispatch = ({...args} : Actions) => {
    if(isMountedRef.current) {
      unsafeDispatch({...args})
    }
  }

  function handleResizing() {
    return dispatch({type: "update_fixedHeader", payload: false})
  }

  function handleScroll() {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if(width > 1000) {
      if (document.documentElement.scrollTop > 400) {
        dispatch({type: "update_fixedHeader", payload: true})
      } else {
        dispatch({type: "update_fixedHeader", payload: false})
      }
    }
  }
  const clearForm = () => {
    dispatch({type: "clear_state", payload: initialState})
  }

  /*const handleUf = (uf: string) => {
    dispatch({type: "update_uf", payload: uf})
  }*/

  /*const handleCity = (value: string) =>
    dispatch({type: "update_city", payload: value})*/

  const handleValidation = async (field: string, value: boolean) => {
    if(!value && state.fieldsAreValid[field] || value && !state.fieldsAreValid[field]) {
      dispatch({type: "validation", payload: { field, value}})
    }
    if(field === "uf" && value === true) {
      dispatch({type: "fetch_cities"})
      const cities = await getCities(uf)
      dispatch({type: "populate_cities", payload: cities})
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if(
      !state.fieldsAreValid.phone
      //|| !state.fieldsAreValid.uf
      //|| !state.fieldsAreValid.city
      //|| city === ''
      ) {
      return handleMessage(
        contextDispatch,
        "Favor preencher corretamente os campos acima.",
        "registration"
      )
    }
    dispatch({type: "update_isSubmiting", payload: true})
    const registrationStatus = await handleRegistration(
      profile,
      phone,
      'Não_informado', //`${city}-${uf}`
      email
    )
    dispatch({type: "update_isSubmiting", payload: false})
    if(!registrationStatus) {
      return null
    }
    clearForm()
    return contextDispatch({
      type: "handle_modalConfirmation", payload: modalConfOptions.registration
    })
  }


  useEffect(() => {
    isMountedRef.current = true
    return () => isMountedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResizing, true);
    return window.removeEventListener("resize", handleResizing)
  }, [])

  return (
    <Section
      position={{ base: 'relative', md: 'fixed' }}
      top={{ md: '0' }}
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
          <Heading mt="4" as="h2" fontSize="24px" lineHeight="28.8px" maxW="227px">
          Faça o pré-cadastro agora e entre nesse movimento!
          </Heading>
          <Flex
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
                  dispatch({type: "update_profile", payload: event.target.value})
              }
              options={profileOptions}
            />
            <CustomPhoneInput
              name="phone"
              id="subscribe-phone"
              label="Celular"
              placeHolder="Digite seu celular"
              value={phone}
              handleChange={(value: string) =>
                dispatch({type: "update_phone", payload: value})}
              notifyValidation={handleValidation}
            />
            <CustomInput
              type="email"
              id="registration-email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                dispatch({type: "update_email", payload: event.target.value})
              }}
              minW={[null, null, "300px"]}
              mb={["16px", null, "0"]}
            />
            <CustomButton
              type="submit"
              label="Fazer pré-cadastro"
              variant="secondaryRegistration"
              isSubmiting={isSubmiting}
            />
          </Flex>
          {
            !contextState?.registrationMsg.status && (
              <Text mt="4" fontSize="xs" lineHeight="lg">
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
