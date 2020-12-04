import { useState, useContext, ChangeEvent } from 'react'
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
import FormMessage from './FormMessage';

import { ufsList, getCities, profileOptions } from '../utils'

type citiesProps = {value: string, label:string}[]

const ModalRecommendation: React.FC = () => {
  const [indicatorEmail, setIndicatorEmail] = useState("")
  const [profile, setProfile] = useState("")
  const [email, setEmail] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [citiesList, setCitiesList] = useState<citiesProps>([])
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { 
    showModalRecommendation,
    handleModalConfirmation, 
    handleModalRecommendation,
    handleRegistration,
    registrationMsg 
  } = useContext(PageContext)

  const clearForm = () => {
    setIndicatorEmail("")
    setProfile("")
    setEmail("")  
    setUf("")
    setCity("")
    setCitiesList([])
    return null
  }

  const handleUf = async (event: ChangeEvent<HTMLSelectElement>) => {
    setIsLoadingCities(true)
    const uf = event.target.value
    const citiesList = await getCities(uf)
    setCitiesList(citiesList)
    setIsLoadingCities(false)
    return setUf(uf)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(profile, email, city, uf, indicatorEmail )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return null
    }
    clearForm()
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
          maxH={["620px", null, null, "600px"]}
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
              <CustomInput 
                  id="recommendation-email"
                  label="Seu e-mail" 
                  placeholder="Digite seu e-mail"
                  value={indicatorEmail}
                  handleChange={(event) => setIndicatorEmail(event.target.value)}
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
                label="Selecione o perfil"
                placeholder="Restaurante ou entregador"
                value={profile} 
                options={profileOptions}
                handleChange={(event) => setProfile(event.target.value)}
              />
              <CustomInput 
                id="recommended-email"
                label="E-mail da indicação" 
                placeholder="Digite o e-mail da sua indicação"
                value={email}
                handleChange={(event) => setEmail(event.target.value)}
              />
              <Flex
                w="100%"
                flexDir="row"
              >
                <CustomSelect 
                  id="recommended-uf"
                  label="UF"
                  placeholder="..."
                  maxW={["100px"]}
                  value={uf} 
                  options={ufsList}
                  handleChange={(event) => handleUf(event)}
                />
                <CustomSelect 
                  id="recommended-city"
                  label="Cidade"
                  placeholder="..."
                  isLoading={isLoadingCities}
                  isLast={true}
                  value={city} 
                  options={citiesList}
                  handleChange={(event) => setCity(event.target.value)}
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