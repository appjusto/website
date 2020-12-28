import { useState, ChangeEvent, useEffect } from 'react'
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

import { useMultiStyleConfig } from "@chakra-ui/react"

interface CustomPhoneInput extends InputProps {
  name: string
  id: string
  label: string
  placeHolder: string
  value: string
  handleChange: (value: string) => void
  notifyValidation: (field: string, isValid: boolean) => void
}

function getRawValue(value: string) {
  let numbers = /\d+/g;
  let result = value.match(numbers)
  if (result === null) {
    return ""
  }
  return result.join("")
}

function phoneFormater(value: string) {
  let formatedNumber = ""
  if (value) {
    const ddd = value.slice(0,2)
    const firstPart = value.slice(2,7)
    const secondPart = value.slice(7,11)
    if(secondPart ==="" && firstPart !== "") {
      formatedNumber = `(${ddd}) ${firstPart}`
    } else if (secondPart ==="" && firstPart === "") {
      formatedNumber = `(${ddd}`
    } else {
      formatedNumber = `(${ddd}) ${firstPart}-${secondPart}`
    }
  }
  return formatedNumber
}

const CustomPhoneInput: React.FC<CustomPhoneInput> = ({
  name, id, label, value, placeHolder, handleChange, notifyValidation, ...props
}) => {
  const [valueToDisplay, setValueToDisplay] = useState("")
  const [placeholderText, setPlaceholderText] = useState("")
  const [isValid, setIsValid] = useState(true)
  const styles = useMultiStyleConfig("Input", {})

  useEffect(() => {
    setPlaceholderText(placeHolder)
  }, [])

  useEffect(() => {
    setValueToDisplay(value)
    validation(value)
    if(value === "") {
      setPlaceholderText(placeHolder)
    }
  }, [value])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const rawValue = getRawValue(inputValue)
    handleChange(rawValue)
  }

  const validation = (value: string) => {
    if(value !== "" && value.length !== 11) {
      setIsValid(false)
      return notifyValidation(name, false)
    } else {
      setIsValid(true)
      return notifyValidation(name, true)
    }
  }

  const handleLeave = () => {
    if(valueToDisplay === "") {
      setPlaceholderText(placeHolder)
    }
  }
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
          isInvalid={!isValid ? true : false}
          type="tel"
          placeholder={placeholderText}
          maxLength={15}
          value={phoneFormater(valueToDisplay)}
          sx={styles.input}
          onChange={onInputChange}
          onFocus={() => setPlaceholderText("(__) _____-____")}
          onBlur={handleLeave}
          autocomplete="off"
          {...props}
        />
    </FormControl>
  );
}

export default CustomPhoneInput;
