import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomSelectProps extends SelectProps {
  id: string
  label: string
  placeholder: string
}


const CustomSelect: React.FC<CustomSelectProps> = ({
  id, label, placeholder
}) => {
  const styles = useMultiStyleConfig("Select", {})
  return (
    <FormControl 
      id={id} 
      mt="24px"
      mr={["0", null, null, "16px"]}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Select 
        placeholder={placeholder}
        sx={styles.select}
      >
        <option>Entregador</option>
        <option>Restaurante</option>
      </Select>
    </FormControl>
  );
}

export default CustomSelect;