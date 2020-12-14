import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { 
  Box, FormControl, FormLabel, Input, InputProps, List, ListItem, Icon 
} from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useMultiStyleConfig } from "@chakra-ui/react"
import { useCombobox } from 'downshift'

interface CustomComboInputProps extends InputProps {
  isDisabled?: boolean
  isLoading?: boolean
  id: string
  label: string
  placeholder: string
  parentValue: string
  maxW?: string[]
  maxLength?: number
  items: string[]
  setParentValue: (value: string) => void
  notifyValidation: (isValid: boolean) => void
}

const CustomComboInput: React.FC<CustomComboInputProps> = ({
  isDisabled = false,
  isLoading = false,
  id, 
  label,
  placeholder, 
  parentValue, 
  maxW,
  maxLength,
  items,
  setParentValue,
  notifyValidation 
}) => {
  const styles = useMultiStyleConfig("Input", {})
  const [inputValue, setInputValue] = useState(parentValue)
  const [inputItems, setInputItems] = useState(items)
  const [isValid, setIsValid] = useState(true)
  useEffect(() => {
    setInputValue(parentValue)
  }, [parentValue])
  const {
    isOpen,
    //getToggleButtonProps,
    getLabelProps,
    closeMenu,
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
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  const validation = (value: string) => {
    const isValid = items.includes(value)
    if(isValid) {
      setIsValid(true)
      notifyValidation(true)
      return console.log("Válido")
    } else {
      setIsValid(false)
      notifyValidation(false)
      return console.log("Inválido")
    }
  }

  useEffect(() => {
    if(inputValue !== "") {
      validation(inputValue)
    }
  }, [inputValue])

  /*const handleLeave = async (event) => {
    const { onBlur } = getInputProps()
    await onBlur(event)
    console.log(inputValue)
    validation(inputValue)
  }*/
  return (
    <FormControl 
      id={id}
      position="relative"
      mt="24px"
      mr={["0", null, null, "16px"]}
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
            //onBlur={handleLeave}
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