import { 
  useState, useEffect, useContext, useRef, ChangeEvent, FormEvent 
}from 'react'
import { 
  Flex, Heading, Text,
} from "@chakra-ui/react"

import CustomPhoneInput from '../../CustomPhoneInput'
import CustomSelect from "../../CustomSelect"
import CustomButton from '../../CustomButton'
import FormMessage from '../../FormMessage'

import PageContext from '../../../context'

import { ufsList, getCities, profileOptions, getCorrectDimension } from '../../../utils'

type citiesProps = {value: string, label:string}[]

const RegistrationBox: React.FC = () => {
  const [profile, setProfile] = useState("")
  const [phone, setPhone] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [citiesList, setCitiesList] = useState<citiesProps>([])
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false)
  const isMountedRef = useRef(null);
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

  function handleResizing() {
    if(isMountedRef) {
      return setFixedHeader(false)
    } 
  }

  async function handleScroll() {
    const width = await getCorrectDimension("width")
    if(width > 1000) {
      if (document.documentElement.scrollTop > 400) {
        setFixedHeader(true)
      } else {
        setFixedHeader(false)
      }
    }
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
        //transition="all 1s ease"
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
                setProfile(event.target.value
              )}
            options={profileOptions}
          />
          <CustomPhoneInput 
            id="subscribe-phone"
            label="Celular" 
            placeHolder="Digite seu celular"
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
    </Flex>
  );
}

export default RegistrationBox;