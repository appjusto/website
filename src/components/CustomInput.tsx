import { FormControl, FormLabel, Input } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface InputProps {
  label: string
}

const CustomInput: React.FC<InputProps> = ({label}) => {
  const styles = useMultiStyleConfig("Input", {})
  return (
    <FormControl 
      id="c-input" 
      mt="24px"
      mr={["0", "0", "0", "16px"]}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Input 
        placeholder="Digite seu e-mail"
        sx={styles.input}
      />
    </FormControl>
  );
}

export default CustomInput;