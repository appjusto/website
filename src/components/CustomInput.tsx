import { ChangeEvent } from 'react'
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomInputProps extends InputProps {
  id: string
  label: string
  placeholder: string
  value: string
  type?: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput: React.FC<CustomInputProps> = ({
  id, label, placeholder, value, type = "text", handleChange, ...props
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
        isRequired
        type={type}
        placeholder={placeholder}
        value={value}
        sx={styles.input}
        onChange={handleChange}
        autoComplete="off"
        {...props}
      />
    </FormControl>
  );
}

export default CustomInput;
