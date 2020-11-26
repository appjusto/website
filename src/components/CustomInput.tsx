import { FormControl, FormLabel, Input } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface InputProps {
  id: string
  label: string
  placeholder: string
}

const CustomInput: React.FC<InputProps> = ({id, label, placeholder}) => {
  const styles = useMultiStyleConfig("Input", {})
  return (
    <FormControl 
      id={id}
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