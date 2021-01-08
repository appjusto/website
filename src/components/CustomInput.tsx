import { useState, ChangeEvent } from 'react'
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
  const [isInvalid, setIsInvalid] = useState(false);
  const styles = useMultiStyleConfig("Input", {})
  const handleValidity = (ev: ChangeEvent<HTMLInputElement>) => {
    if (value !== '' && !ev.target.validity.valid) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <FormControl
      id={id}
      sx={styles.control}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Input
        isRequired
        isInvalid={isInvalid}
        type={type}
        placeholder={placeholder}
        value={value}
        sx={styles.input}
        onChange={handleChange}
        onBlur={(ev) => handleValidity(ev)}
        {...props}
      />
    </FormControl>
  );
}

export default CustomInput;
