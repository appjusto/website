import { ChangeEvent } from 'react'
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomInputProps extends InputProps {
  id: string
  label: string
  placeholder: string
  type?: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput: React.FC<CustomInputProps> = ({
  id, label, placeholder, type = "text", handleChange
}) => {
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
        type={type}
        placeholder={placeholder}
        sx={styles.input}
        onChange={handleChange}
      />
    </FormControl>
  );
}

export default CustomInput;