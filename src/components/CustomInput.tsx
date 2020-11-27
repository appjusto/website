import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomInputProps extends InputProps {
  id: string
  label: string
  placeholder: string
}

const CustomInput: React.FC<CustomInputProps> = ({id, label, placeholder}) => {
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