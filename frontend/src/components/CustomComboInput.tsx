import { useState, useEffect } from "react";
import {
  Box, FormControl, FormLabel, Input, InputProps, List, ListItem, Icon
} from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useMultiStyleConfig } from "@chakra-ui/react"
import { useCombobox } from 'downshift'
import { removeAccents } from '../utils'

interface CustomComboInputProps extends InputProps {
  isDisabled?: boolean
  isLoading?: boolean
  name: string
  id: string
  label: string
  placeholder: string
  parentValue: string
  maxW?: string[]
  maxLength?: number
  items: string[]
  setParentValue: (value: string) => void
  notifyValidation: (field: string, isValid: boolean) => void
}

const CustomComboInput: React.FC<CustomComboInputProps> = ({
  isDisabled = false,
  isLoading = false,
  name,
  id,
  label,
  placeholder,
  parentValue,
  maxW,
  maxLength,
  items,
  setParentValue,
  notifyValidation,
  ...props
}) => {
  const styles = useMultiStyleConfig("Input", {})
  const [inputValue, setInputValue] = useState(parentValue)
  const [inputItems, setInputItems] = useState(items)
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    setInputValue(parentValue)
    validation(parentValue)
  }, [parentValue])

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,

  } = useCombobox({
    id,
    items: inputItems,
    onInputValueChange: ({inputValue}) => {
      setParentValue(inputValue)
      setInputItems( items.filter((item) =>
        removeAccents(item).startsWith(removeAccents(inputValue)),
      ))
    }
  })

  const validation = (value: string) => {
    const isValid = items.includes(value)
    if(value !== "" && !isValid) {
      setIsValid(false)
      return notifyValidation(name, false)
    } else {
      setIsValid(true)
      return notifyValidation(name, true)
    }
  }

  return (
    <FormControl
      id={id}
      sx={styles.control}
      maxW={maxW ? maxW : null}
    >
      <FormLabel sx={styles.label} {...getLabelProps()}>
        {label}
      </FormLabel>
        <Box {...getComboboxProps()}>
          <Input
            isRequired
            isDisabled={isDisabled}
            isInvalid={!isValid ? true : false}
            placeholder={isLoading ? "Carregando..." : placeholder}
            sx={styles.input}
            {...getInputProps()}
            value={inputValue}
            maxLength={maxLength ? maxLength : null}
          />
        </Box>
          <List
            display={isOpen ? "block" : "none"}
            spacing={2}
            maxHeight= "200px"
            w= "100%"
            zIndex="2000"
            fontFamily="Barlow"
            fontSize="16px"
            color="#697667"
            overflowY= "hidden"
            backgroundColor= "#fff"
            padding= "16px 8px"
            position= "absolute"
            {...getMenuProps()}
          >
            {
              isOpen && (
                inputItems.map((item, index) => (
                  <ListItem
                    style={
                      highlightedIndex === index ? {backgroundColor: '#C8D7CB'} : {}
                    }
                    key={`${item}${index}`}
                    display="flex"
                    flexDir="row"
                    alignItems="center"
                    p="0 8px"
                    cursor="pointer"
                    {...getItemProps({item, index})}
                  >
                    <Icon
                      as={FaMapMarkerAlt}
                      mr="8px"
                      w="12px"
                      h="12px"
                    />
                    {item}
                  </ListItem>
                ))
              )}
          </List>
    </FormControl>
  );
}

export default CustomComboInput;
