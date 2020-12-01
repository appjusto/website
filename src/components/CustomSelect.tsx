import { ChangeEvent } from 'react'
import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomSelectProps extends SelectProps {
  id: string
  label: string
  placeholder: string
  value: string
  maxW?: string
  isLoading?: boolean
  options: {value: string, label: string}[]
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
}


const CustomSelect: React.FC<CustomSelectProps> = ({
  id, 
  label, 
  placeholder,
  value,
  maxW = "100%",
  isLoading, 
  options, 
  handleChange
}) => {
  const styles = useMultiStyleConfig("Select", {})
  if(isLoading) {
    return (
      <FormControl 
      id={id} 
      mt="24px"
      mr={["0", null, null, "16px"]}
      maxW={maxW}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Select
        isRequired
        placeholder="Carregando..."
        sx={styles.select}
      >
      </Select>
    </FormControl>
    )
  }
  return (
    <FormControl 
      id={id} 
      mt="24px"
      mr={["0", null, null, "16px"]}
      maxW={maxW}
    >
      <FormLabel sx={styles.label}>
        {label}
      </FormLabel>
      <Select
        isRequired
        placeholder={placeholder}
        value={value}
        sx={styles.select}
        onChange={handleChange}
      >
        {
          options.map( option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default CustomSelect;