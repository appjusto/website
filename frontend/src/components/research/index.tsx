import { useState, useRef, ChangeEvent } from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";
import * as typeformEmbed from "@typeform/embed";

import CustomSelect from "../CustomSelect";
import { profileOptions } from '../../utils';

const Research: React.FC = () => {
  const [profile, setProfile] = useState("")
  const formBoxRef = useRef(null)

  const makeForm= (formUrl: string) => {
    typeformEmbed.makeWidget(formBoxRef.current, formUrl, {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0,
    });
  }

  const handleSelect = (profile: string) => {
    setProfile(profile)
    if(profile === "consumers") {
      makeForm("https://form.typeform.com/to/S6p5e11f")
    } else if (profile === "couriers") {
      makeForm("https://form.typeform.com/to/x4GHkfQ6")
    } else if (profile === "restaurants") {
      makeForm("https://form.typeform.com/to/TCJFIwUe")
    }
  }

  return (
    <Flex
      position="relative"
      w="100%"
      minH="100vh"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Text
        textStyle="p"
        mb="24px"
      >
        Escolha o seu perfil e responda a pesquisa. <br/>
        Ahhh, e fique à vontade para compartilhar com os amigos! ;)
      </Text>
      <CustomSelect
        id="research-select"
        maxW={["360px"]}
        label="Perfil"
        options={profileOptions}
        placeholder="Selecione seu perfil"
        value={profile}
        handleChange={
          (event: ChangeEvent<HTMLSelectElement>) =>
          handleSelect(event.target.value)
        }
      />
      <Box
        position="relative"
        w="100%"
        h="500px"
        mt="16px"
        mb="64px"
        bg="#F2F6EA"
        ref={formBoxRef}
        display={profile !== "" ? "block" : "none"}
      />
    </Flex>
  );
}

export default Research;
