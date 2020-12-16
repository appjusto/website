import {
  useReducer, useEffect, useLayoutEffect, useRef, ChangeEvent, FormEvent
}from 'react'
import { Flex, Heading, Text } from "@chakra-ui/react"

import CustomPhoneInput from '../../CustomPhoneInput'
import CustomSelect from "../../CustomSelect"
import CustomComboInput from '../../CustomComboInput'
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'

import {
  usePageContext, handleMessage
} from '../../../context'

import {
  ufsList, getCities, profileOptions, getCorrectDimension
} from '../../../utils'

import { registrationReducer, Actions } from '../../../reducers/registrationReducer'

const initialState = {
  profile: "",
  phone: "",
  uf: "",
  city: "",
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
    city,
    isLoadingCities,
    citiesList,
    isSubmiting,
    fixedHeader,
  } = state
  const { contextState, contextDispatch, handleRegistration } = usePageContext()
  const isMountedRef = useRef(false);

  useLayoutEffect(() => {
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

  const dispatch = ({...args} : Actions) => {
    if(isMountedRef.current) {
      unsafeDispatch({...args})
    }
  }

  function handleResizing() {
    return dispatch({type: "update_fixedHeader", payload: false})
  }

  async function handleScroll() {
    const width = await getCorrectDimension("width")
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

  const handleUf = (uf: string) => {
    dispatch({type: "update_uf", payload: uf})
  }

  const handleCity = (value: string) =>
    dispatch({type: "update_city", payload: value})

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
      || !state.fieldsAreValid.uf
      || !state.fieldsAreValid.city
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
      `${city}-${uf}`
    )
    dispatch({type: "update_isSubmiting", payload: false})
    if(!registrationStatus) {
      return null
    }
    clearForm()
    return contextDispatch({ type: "handle_modalConfirmation", payload: "subscribe"})
  }
  return (
    <Flex
      position={fixedHeader ? "fixed" : "relative"}
      top={fixedHeader ? "0" : null}
      left={fixedHeader ? "0" : null}
      w={fixedHeader ? "100%" : "auto"}
      borderBottom={fixedHeader ? "1px solid #C8D7CB" : "none"}
      transition="all 1s ease"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
      mb="24px"
    >
      <Flex
        flexDir="column"
        w="100%"
        maxW="1104px"
        p={fixedHeader ? "0 24px 16px" : "24px"}
      >
        <Heading
          as="h2"
          fontSize="24px"
          display={fixedHeader ? "none" : "block"}
        >
          Faça o pré-cadastro agora e entre nesse movimento!
        </Heading>
        <Text
          fontSize="16px"
          fontFamily="Barlow"
          display={fixedHeader ? "none" : "block"}
        >
          Ao fazer o pré-cadastro, você autoriza o envio de nossas comunicações
          para o número cadastrado.
        </Text>
        <Flex
          as="form"
          flexDir={["column", null, null, "row"]}
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
          <Flex
            w="100%"
            minW={["auto", null, null, "360px"]}
            flexDir={["column", null, "row"]}
          >
            <CustomComboInput
              name="uf"
              id="subscribe-uf"
              label="UF"
              placeholder="UF"
              parentValue={uf}
              setParentValue={handleUf}
              items={ufsList}
              maxW={["auto", null, "100px"]}
              maxLength={2}
              notifyValidation={handleValidation}
            />
            <CustomComboInput
              isDisabled={citiesList.length > 0 ? false : true}
              isLoading={isLoadingCities}
              name="city"
              id="subscribe-city"
              label="Cidade"
              placeholder="Selecione sua cidade"
              parentValue={city}
              setParentValue={handleCity}
              items={citiesList}
              notifyValidation={handleValidation}
            />
          </Flex>
          <CustomButton
            type="submit"
            label="Fazer pré-cadastro"
            variant="secondaryRegistration"
            isSubmiting={isSubmiting}
          />
        </Flex>
        {
          contextState.registrationMsg.status &&
          contextState.registrationMsg.form === "registration" &&
          <FormMessage />
        }
      </Flex>
    </Flex>
  );
}

export default RegistrationBox;
