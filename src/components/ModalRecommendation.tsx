import { useState, useContext, FormEvent, ChangeEvent } from 'react'
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
import CustomPhoneInput from './CustomPhoneInput'
import CustomSelect from './CustomSelect'
import CustomComboInput from './CustomComboInput'
import CustomButton from './CustomButton'
import FormMessage from './FormMessage';

import { ufsList, profileOptions, getCities } from '../utils'

const ModalRecommendation: React.FC = () => {
  const [indicatorPhone, setIndicatorPhone] = useState("")
  const [profile, setProfile] = useState("")
  const [phone, setPhone] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [citiesList, setCitiesList] = useState([])
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { 
    showModalRecommendation,
    handleModalConfirmation, 
    handleModalRecommendation,
    handleRegistration,
    registrationMsg,
    setRegistrationMsg, 
  } = useContext(PageContext)

  const clearForm = () => {
    setIndicatorPhone("")
    setProfile("")
    setPhone("")
    setUf("")  
    setCity("")
    return null
  }

  const handleUf = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCity("")
    setIsLoadingCities(true)
    const uf = event.target.value
    const citiesList = await getCities(uf)
    setCitiesList(citiesList)
    setIsLoadingCities(false)
    return setUf(uf)
  }

  const handleCity = (value: string) => setCity(value)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(profile, phone, `${city}-${uf}`, indicatorPhone )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return null
    }
    clearForm()
    handleModalConfirmation("recommendation")
    return handleModalRecommendation()
  }

  const handleClose = () => {
    clearForm()
    setRegistrationMsg({status: false, message: ""})
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
                id="recommendation-phone"
                label="Seu celular" 
                placeHolder="Digite seu celular"
                value={indicatorPhone}
                handleChange={(value: string) => setIndicatorPhone(value)}
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
                handleChange={(event) => setProfile(event.target.value)}
              />
              <CustomPhoneInput 
                id="recommended-phone"
                label="Celular do indicado"
                placeHolder="Digite o celular do indicado" 
                value={phone}
                handleChange={(value: string) => setPhone(value)}
              />
               <Flex
                  w="100%"
                  flexDir={["column", null, "row"]}
                >
                  <CustomSelect 
                    id="subscribe-uf"
                    label="UF"
                    placeholder="UF"
                    value={uf}
                    handleChange={handleUf}
                    options={[{value: "teste", label: "teste"}]}
                    maxW={["auto", null, "100px"]}
                  />
                  <CustomComboInput 
                    isDisabled={uf === "" ? true : false}
                    isLoading={isLoadingCities} 
                    id="subscribe-city"
                    label="Cidade"
                    placeholder="Selecione sua cidade"
                    parentValue={city}
                    setParentValue={handleCity}
                    items={citiesList}
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