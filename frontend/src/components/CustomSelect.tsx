import { ChangeEvent } from 'react'
import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomSelectProps extends SelectProps {
  id: string
  label: string
  placeholder: string
  value: string
  maxW?: string[]
  marginLeft?: string[]
  isLast?: boolean
  isLoading?: boolean
  options: {value: string, label: string}[]
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void
}


const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  placeholder,
  value,
  marginLeft = ["0"],
  maxW = "100%",
  mt = '16px',
  mb,
  mr,
  ml,
  isLast,
  isLoading,
  options,
  handleChange,
  ...props
}) => {
  const controlProps = { maxW, mt, mb, mr, ml };
  const styles = useMultiStyleConfig("Select", {})
  if(isLoading) {
    return (
      <FormControl
        id={id}
        sx={styles.control}
        mr={["0", null, null, isLast ? "0" : "16px"]}
        {...controlProps}
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
      sx={styles.control}
      mr={["0", null, null, isLast ? "0" : "16px"]}
      maxW={maxW}
      ml={marginLeft}
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
        {...props}
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
