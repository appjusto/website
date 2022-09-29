import { Box, Button, Checkbox, CheckboxGroup, Flex, Heading, Text, useToast, VStack } from "@chakra-ui/react";
import React from "react";
import { NotificationPreferences } from '@appjusto/types';
import { useRouter } from "next/router";
import axios from 'axios';
import { CustomToast } from "../CustomToast";

const initialState = ['status', 'general', 'marketing'] as NotificationPreferences;

interface APIResult {
  status: number;
  error?: {
    code: string;
    message: {
      title: string;
      description?: string;
    };
  }
}


export const NotificationsPage = () => {
  // router
  const { query } = useRouter();
  // state
  const [preferences, setPreferences] = React.useState<NotificationPreferences>(initialState);
  const [isLoading, setIsLoading] = React.useState(false);
  // handlers
  const toast = useToast();
  const handlePreferencesUpdate = async () => {
    const { flavor, id, notificationPreferencesToken, env } = query;
    const project = `app-justo-${env ?? 'live'}`
    if(!flavor || !id || !notificationPreferencesToken) {
      return console.log("Missing parameters");
    };
    setIsLoading(true);
    const baseUrl = `https://southamerica-east1-${project}.cloudfunctions.net/updateNotificationPreferences`
    const data = {
      id,
      flavor,
      notificationPreferencesToken,
      notificationPreferences: preferences,
    }
    console.log("baseUrl", baseUrl);
    console.log("data", data);
    // setTimeout(() => {
    //   const result = {
    //     status: 500,
    //     error: {
    //       code: 'X',
    //       message: {
    //         title: 'Não deu'
    //       }
    //     }
    //   } as APIResult;
    //   const { status, error } = result;
    //   const type = status === 200 ? 'success' : 'error';
    //   const message = status === 200 ? {
    //     title: "Informações salvas com sucesso"
    //   } : error.message;
    //   setIsLoading(false);
    //   toast({
    //     id: 'request',
    //     duration: 6000,
    //     render: () => (
    //       <CustomToast
    //         type={type}
    //         message={message}
    //       />
    //     ),
    //   });
    // }, 2000)
    try {
      const result = await axios.post(baseUrl, data);
      const { status, error } = result as APIResult;
      const type = status === 200 ? 'success' : 'error';
      const message = status === 200 ? {
        title: "Informações salvas com sucesso"
      } : error.message;
      setIsLoading(false);
      toast({
        id: 'request',
        duration: 6000,
        render: () => (
          <CustomToast
          type={type}
          message={message}
          />
          ),
        });
      } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast({
        id: 'request',
        duration: 6000,
        render: () => (
          <CustomToast
            type="error"
          />
        ),
      });
    }
  };
  // UI
  return (
    <Flex mt="-80px" flexDir="column">
      <Heading as="h2" fontSize="18px">
        Escolha que tipo de comunicações deseja receber do AppJusto:
      </Heading>
      <CheckboxGroup
        value={preferences}
        onChange={(values: NotificationPreferences) =>
          setPreferences(values)
        }
      >
        <VStack mt="6" alignItems="flex-start" maxW="400px">
        <Box>
            <Checkbox size="sm" fontWeight="700" value="status">Comunicações operacionais</Checkbox>
            <Text fontSize="15px">
              Para saber sobre novas versões, atualizações do app e mais.
            </Text>
          </Box>
          <Box>
            <Checkbox size="sm" fontWeight="700" value="general">
              Comunicações institucionais
            </Checkbox>
            <Text fontSize="15px">
              Para conhecer mais sobre o AppJusto: propósito, impacto, crescimento, financiamento e mais.
            </Text>
          </Box>
          <Box>
            <Checkbox size="sm" fontWeight="700" value="marketing">Promoções e ofertas</Checkbox>
            <Text fontSize="15px">
              Avisar sobre promoções e ofertas referentes aos restaurantes da rede.
            </Text>
          </Box>
        </VStack>
      </CheckboxGroup>
      <Button
        mt="6"
        variant="primary"
        size="lg"
        maxW="400px"
        onClick={handlePreferencesUpdate}
        isLoading={isLoading}
        loadingText="Salvando"
      >
        Salvar alterações
      </Button>
    </Flex>
  )
}
