import { ChangeEvent } from 'react'
import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomSelectProps extends SelectProps {
  id: string
  label: string
  placeholder: string
  maxW?: string
  options: {value: string, label: string}[]
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
}


const CustomSelect: React.FC<CustomSelectProps> = ({
  id, label, placeholder, maxW = "100%", options, handleChange
}) => {
  const styles = useMultiStyleConfig("Select", {})
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
        placeholder={placeholder}
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