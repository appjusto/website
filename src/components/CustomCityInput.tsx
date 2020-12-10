import React, { useState, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { useMultiStyleConfig } from "@chakra-ui/react"

import { loadScript, handleScriptLoad } from '../utils/googlePlacesFunctions'

interface CustomCityInputProps extends InputProps {
  id: string
  label: string
  placeholder: string
  notifyParentWithValue: (value) => void
}

const CustomCityInput: React.FC<CustomCityInputProps> = ({
  id, label, placeholder, notifyParentWithValue, ...props
}) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const styles = useMultiStyleConfig("Input", {})

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

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
          value={query}
          sx={styles.input}
          onChange={event => setQuery(event.target.value)}
          {...props}
        />
    </FormControl>
  );
}

export default CustomCityInput;