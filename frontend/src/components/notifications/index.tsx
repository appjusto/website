import { Box, Button, Checkbox, CheckboxGroup, Flex, Heading, Text, useToast, VStack } from "@chakra-ui/react";
import React from "react";
import { NotificationPreferences } from '@appjusto/types';
import { useRouter } from "next/router";
import axios from 'axios';
import { CustomToast } from "../CustomToast";

const initialState = ['status', 'general', 'marketing'] as NotificationPreferences;

const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
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
    const { flavor, id, notificationPreferencesToken } = query;
    const project = `app-justo-${env}`
    if(!flavor || !id || !notificationPreferencesToken) {
      toast({
        duration: 6000,
        render: () => (
          <CustomToast
            type="error"
            message={{ title: 'Parâmetros não encontrados'}}
          />
        ),
      });
      return;
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
    try {
      const response = await axios.post(baseUrl, data, { headers });
      const message = {
        title: "Informações salvas com sucesso"
      };
      setIsLoading(false);
      toast({
        duration: 4000,
        render: () => (
          <CustomToast
            type="success"
            message={message}
          />
          ),
        });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast({
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
