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

import { usePageContext } from '../context/'

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
  const { 
    showModalRecommendation,
    handleModalConfirmation, 
    handleModalRecommendation,
    handleRegistration,
    registrationMsg,
    handleMessage, 
  } = usePageContext()
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
      return handleMessage("Favor preencher corretamente os campos acima.")
    }
    dispatch({type: "update_isSubmiting", payload: true})
    const registrationStatus = await handleRegistration(
      profile, phone, `${city}-${uf}`, indicatorPhone 
    )
    dispatch({type: "update_isSubmiting", payload: false})
    if(!registrationStatus) {
      return null
    }
    clearForm()
    handleModalConfirmation("recommendation")
    return handleModalRecommendation()
  }

  const handleClose = () => {
    clearForm()
    handleMessage("")
    return handleModalRecommendation()
  }

  return (
    <Modal 
      id="ModalRecommendation"
      size="full"
      blockScrollOnMount={true} 
      isOpen={showModalRecommendation} 
      onClose={handleClose}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW="752px"
          maxH={["100%", null, "600px"]}
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
                  registrationMsg.status && (
                  <FormMessage />
                  )
                }
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalRecommendation;