import { FormControl, FormLabel, Input } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface InputProps {
  label: string
  placeholder: string
}

const CustomInput: React.FC<InputProps> = ({label, placeholder}) => {
  const styles = useMultiStyleConfig("Input", {})
  return (
    <FormControl 
      id="c-input" 
      mt="24px"
      mr={["0", null, null, "16px"]}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Input 
        placeholder={placeholder}
        sx={styles.input}
      />
    </FormControl>
  );
}

export default CustomInput;