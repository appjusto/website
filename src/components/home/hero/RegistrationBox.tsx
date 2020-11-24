import { Flex, Heading, Text } from "@chakra-ui/react";
import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";
import CustomButton from '../../CustomButton'


const components: React.FC = () => {
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
        flexDir={{base: "column", sm: "column", md: "column", lg: "row"}}
      >
        <CustomSelect />
        <CustomInput label="E-mail" placeholder="Digite seu e-mail."/>
        <CustomInput label="Cidade" placeholder="Digite sua cidade."/>
        <CustomButton label="Fazer pré-cadastro" variant="secondary" />
      </Flex>
    </Flex>
  );
}

export default components;