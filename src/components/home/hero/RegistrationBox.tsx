import { useState, useContext, ChangeEvent }from 'react'
import { 
  Flex, 
  Heading, 
  Text,
} from "@chakra-ui/react"
import CustomInput from "../../CustomInput"
import CustomSelect from "../../CustomSelect"
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'

import PageContext from '../../../context'

import { ufsList, getCities, profileOptions } from '../../../utils'

type citiesProps = {value: string, label:string}[]

const RegistrationBox: React.FC = () => {
  const [profile, setProfile] = useState("")
  const [email, setEmail] = useState("")
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
    setEmail("")  
    setUf("")
    setCity("")
    setCitiesList([])
    return null
  }

  const handleProfile = (event: ChangeEvent<HTMLSelectElement>) => 
    setProfile(event.target.value)

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => 
    setEmail(event.target.value)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(profile, email, city, uf, "" )
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
    >
      <Heading as="h2" fontSize="24px" mb="4px">
        Faça o pré-cadastro agora!
      </Heading>
      <Text fontSize="16px" fontFamily="Barlow">
        Quanto mais pré-cadastros na sua cidade, mais rápido chegaremos nela.
      </Text>
      <Flex
        as="form"
        flexDir={["column", null, null, "row"]}
        onSubmit={(event) => handleSubmit(event)}
      >
        <CustomSelect 
          id="subscribe-profile"
          label="Perfil"
          placeholder="Selecione seu perfil"
          value={profile}
          handleChange={handleProfile}
          options={profileOptions}
        />
        <CustomInput 
          id="subscribe-email"
          type="email" 
          label="E-mail" 
          placeholder="Digite seu e-mail"
          value={email}
          handleChange={handleEmail}
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