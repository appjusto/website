import { useContext }from 'react'
import { 
  Flex, 
  Heading, 
  Text, 
} from "@chakra-ui/react";
import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";
import CustomButton from '../../CustomButton'

import PageContext from '../../../context'


const RegistrationBox: React.FC = () => {
  const { handleModalConfirmation } = useContext(PageContext)
  function handleSubmit() {
    return handleModalConfirmation("subscribe")
  }
  return (
    <Flex 
      flexDir="column"
      p="24px 16px"
      bg="white"
    >
      <Heading as="h2" fontSize="24px" mb="4px">
        Faça o pré-cadastro agora!
      </Heading>
      <Text fontSize="16px" fontFamily="Barlow">
        Quanto mais pré-cadastros na sua cidade, mais rápido chegaremos nela.
      </Text>
      <Flex
        flexDir={["column", null, null, "row"]}
      >
        <CustomSelect 
          id="subscribe-role"
          label="Perfil"
          placeholder="Selecione seu perfil"
        />
        <CustomInput id="subscribe-email" label="E-mail" placeholder="Digite seu e-mail."/>
        <CustomInput id="subscribe-city" label="Cidade" placeholder="Digite sua cidade."/>
        <CustomButton 
          label="Fazer pré-cadastro" 
          variant="secondary" 
          handleClick={handleSubmit}  
        />
      </Flex>
    </Flex>
  );
}

export default RegistrationBox;