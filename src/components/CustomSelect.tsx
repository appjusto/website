import { FormControl, FormLabel, Select } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

const CustomSelect: React.FC = () => {
  const styles = useMultiStyleConfig("Select", {})
  return (
    <FormControl 
      id="role" 
      mt="24px"
      mr={["0", null, null, "16px"]}
    >
      <FormLabel sx={styles.label}>
        Perfil
      </FormLabel>
      <Select 
        placeholder="Selecione seu perfil"
        sx={styles.select}
      >
        <option>Entregador</option>
        <option>Restaurante</option>
      </Select>
    </FormControl>
  );
}

export default CustomSelect;