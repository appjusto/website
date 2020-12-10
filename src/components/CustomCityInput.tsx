import { useState, useEffect, useRef, useContext, ChangeEvent } from "react";
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { useMultiStyleConfig } from "@chakra-ui/react"

import { loadScript, handleScriptLoad } from '../utils/googlePlacesFunctions'

import PageContext from '../context'

interface CustomCityInputProps extends InputProps {
  id: string
  label: string
  placeholder: string
  parentValue: string
  notifyParentWithValue: (value: string) => void
}

const CustomCityInput: React.FC<CustomCityInputProps> = ({
  id, label, placeholder, parentValue, notifyParentWithValue, ...props
}) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const styles = useMultiStyleConfig("Input", {})
  const { googlePlacesScript, setGooglePlacesScript } = useContext(PageContext)
  useEffect(() => {
    setQuery(parentValue)
  } ,[parentValue])
  useEffect(() => {
    if(!googlePlacesScript) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API_KEY}&libraries=places`,
      )
      setGooglePlacesScript(true)
    }
  }, []);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    notifyParentWithValue(event.target.value)
    handleScriptLoad(notifyParentWithValue, autoCompleteRef)
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
          ref={autoCompleteRef} 
          type="text"
          placeholder={placeholder}
          value={parentValue}
          sx={styles.input}
          onChange={onInputChange}
          {...props}
        />
    </FormControl>
  );
}

export default CustomCityInput;