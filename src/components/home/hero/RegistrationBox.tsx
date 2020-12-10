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

import { profileOptions, getCorrectDimension } from '../../../utils'
import CustomCityInput from '../../CustomCityInput'

const RegistrationBox: React.FC = () => {
  const [profile, setProfile] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false)
  const isMountedRef = useRef(null);
  const { 
    handleModalConfirmation, 
    handleRegistration, 
    registrationMsg,
  } = useContext(PageContext)

  useEffect(() => {
    isMountedRef.current = true
    return () => isMountedRef.current = false
  }, [])

  const clearForm = () => {
    setProfile("")
    setPhone("")  
    setCity("")
    return null
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmiting(true)
    const registrationStatus = await handleRegistration(profile, phone, city, "" )
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
          <CustomCityInput
            id="subscribe-city"
            label="Cidade"
            placeholder="Digite e selecione sua cidade"
            parentValue={city}
            notifyParentWithValue={(value: string) => setCity(value)}
          />
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