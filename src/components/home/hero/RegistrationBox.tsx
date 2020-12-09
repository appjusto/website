import { useState, useContext, ChangeEvent, FormEvent }from 'react'
import { 
  Flex, 
  Heading, 
  Text,
} from "@chakra-ui/react"

import CustomPhoneInput from '../../CustomPhoneInput'
import CustomSelect from "../../CustomSelect"
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'

import PageContext from '../../../context'

import { ufsList, getCities, profileOptions } from '../../../utils'

type citiesProps = {value: string, label:string}[]

const RegistrationBox: React.FC = () => {
  const [profile, setProfile] = useState("")
  const [phone, setPhone] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [citiesList, setCitiesList] = useState<citiesProps>([])
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { 
    handleModalConfirmation, 
    handleRegistration, 
    registrationMsg
  } = useContext(PageContext)

  const clearForm = () => {
    setProfile("")
    setPhone("")  
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

  const handleCity = (event: ChangeEvent<HTMLSelectElement>) => 
    setCity(event.target.value)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(profile, phone, city, uf, "" )
    setIsSubmiting(false)
    if(!registrationStatus) {
      return null
    }
    clearForm()
    return handleModalConfirmation("subscribe")
  }

  return (
    <Flex 
      flexDir="column"
      p="24px"
      bg="white"
      mb="24px"
    >
      <Heading as="h2" fontSize="24px" mb="4px">
        Faça o pré-cadastro agora!
      </Heading>
      <Text fontSize="16px" fontFamily="Barlow">
        E ajude a levar esse movimento para perto de você.
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
              setProfile(event.target.value
            )}
          options={profileOptions}
        />
        <CustomPhoneInput 
          id="subscribe-phone"
          label="Celular" 
          value={phone}
          handleChange={(value: string) => setPhone(value)}
        />
        <Flex
          w="100%"
          minW={["auto", null, null, "360px"]}
          flexDir={["column", null, "row"]}
        >
          <CustomSelect 
            id="subscribe-uf"
            label="UF"
            placeholder="UF"
            value={uf}
            handleChange={handleUf}
            options={ufsList}
            maxW={["auto", null, "100px"]}
          />
          <CustomSelect
            isDisabled={uf === "" ? true : false}
            isLoading={isLoadingCities} 
            id="subscribe-city"
            label="Cidade"
            placeholder="Selecione sua cidade"
            value={city}
            handleChange={handleCity}
            options={citiesList}
            marginLeft={["0", null, "16px", "0"]}
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
        registrationMsg.status && (
         <FormMessage />
        )
      }
    </Flex>
  );
}

export default RegistrationBox;