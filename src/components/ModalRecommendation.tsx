import { useReducer, FormEvent } from 'react'
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

import CustomPhoneInput from './CustomPhoneInput'
import CustomSelect from './CustomSelect'
import CustomComboInput from './CustomComboInput'
import CustomButton from './CustomButton'
import FormMessage from './FormMessage';

import { usePageContext, handleMessage, handleRegistration } from '../context/'

import { ufsList, profileOptions, getCities } from '../utils'

import { registrationReducer } from '../reducers/registrationReducer'

const initialState = {
  indicatorPhone: "",
  profile: "",
  phone: "",
  uf: "",
  city: "",
  isLoadingCities: false,
  citiesList: [],
  isSubmiting: false,
  fieldsAreValid: {
    indicatorPhone: true,
    phone: true,
    uf: true,
    city: true
  }
}

const ModalRecommendation: React.FC = () => {
  const [state, dispatch] = useReducer(registrationReducer, initialState)
  const { contextState, contextDispatch  } = usePageContext()
  const {
    indicatorPhone,
    profile,
    phone,
    uf,
    city,
    isLoadingCities,
    citiesList,
    isSubmiting,
  } = state

  const clearForm = () => {
    dispatch({type: "clear_state", payload: initialState})
  }

  const handleUf = async (uf: string) => {
    dispatch({type: "update_uf", payload: uf})
    const cities = await getCities(uf)
    dispatch({type: "populate_cities", payload: cities})
  }

  const handleCity = (value: string) => 
    dispatch({type: "update_city", payload: value})

  const handleValidation = (field: string, value: boolean) => {
    if(!value && state.fieldsAreValid[field] || value && !state.fieldsAreValid[field]) {
      dispatch({type: "validation", payload: { field, value}})
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if(
      !state.fieldsAreValid.indicatorPhone
      || !state.fieldsAreValid.phone 
      || !state.fieldsAreValid.uf 
      || !state.fieldsAreValid.city
      ) {
      return handleMessage(contextDispatch, "Favor preencher corretamente os campos acima.", "recommendation")
    }
    dispatch({type: "update_isSubmiting", payload: true})
    const registrationStatus = await handleRegistration(
      contextDispatch, 
      "recommendation", 
      profile, 
      phone, 
      `${city}-${uf}`, 
      indicatorPhone 
    )
    dispatch({type: "update_isSubmiting", payload: false})
    if(!registrationStatus) {
      return null
    }
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
          maxH={["100%", null, "600px"]}
          overflow="auto"
        >
          <ModalCloseButton 
            border="2px solid black"
            borderRadius="8px"
          />
          <ModalBody 
            pt={["16px", null, null, "32px"]} 
            pb={["16px", null, null, "32px"]}
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
                flexDir="row"
                justifyContent="flex-start"
                alignItems="center"  
                mb="8px"
              >
                <Box
                  position="relative"
                  mr="16px"
                  w={["36px", null, null, "48px"]}
                  h={["36px", null, null, "48px"]}
                >
                  <Image 
                    src="/icon-promotion.svg"
                    alt="Ilustração de auto-falante" 
                    width={48} 
                    height={48} 
                  />
                </Box>
                <Heading 
                  as="h2"
                  fontSize={["20px", null, null, "24px"]}
                  lineHeight={["22px", null, null, "30px"]}  
                >
                  Indique o AppJusto
                </Heading> 
              </Flex>
              <Text 
                textStyle="p" 
                fontSize={["14px", null, null, "16px"]}
                maxW="560px"
              >
                Agora chegou a hora de divulgar. Quanto mais você divulgar, mais 
                rápido o AppJusto chegará até você!
              </Text>
              <CustomPhoneInput
                name="indicatorPhone" 
                id="recommendation-phone"
                label="Seu celular" 
                placeHolder="Digite seu celular"
                value={indicatorPhone}
                handleChange={
                  (value: string) => dispatch(
                    {type: "update_indicatorPhone", payload: value}
                  )
                }
                notifyValidation={handleValidation}
              />
              <Text 
                mt="16px"
                textStyle="p"
                fontWeight="700" 
                maxW="560px"
              >
                Indicar para:
              </Text>
              <CustomSelect 
                id="recommended-profile"
                label="Perfil"
                placeholder="Selecione o perfil"
                value={profile} 
                options={profileOptions}
                handleChange={
                  (event) => dispatch(
                    {type: "update_profile", payload: event.target.value}
                  )
                }
              />
              <CustomPhoneInput
                name="phone" 
                id="recommended-phone"
                label="Celular do indicado"
                placeHolder="Digite o celular do indicado" 
                value={phone}
                handleChange={
                  (value: string) => 
                    dispatch({type: "update_phone", payload: value})
                }
                notifyValidation={handleValidation}
              />
               <Flex
                  w="100%"
                  flexDir={["column", null, "row"]}
                >
                  <CustomComboInput
                    name="uf" 
                    id="recommended-uf"
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
                  label="Indicar agora"
                  variant="secondaryRegistration"
                  maxW="260px"
                  mt="26px"
                  isSubmiting={isSubmiting} 
                />
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