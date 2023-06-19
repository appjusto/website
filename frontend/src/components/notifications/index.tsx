import { NotificationPreferences } from "@appjusto/types";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { CustomToast } from "../CustomToast";

const initialState = [
  "status",
  "general",
  "marketing",
] as NotificationPreferences;

const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
const project = `app-justo-${env}`;
const updateNotificationPreferencesUrl = `https://southamerica-east1-${project}.cloudfunctions.net/updateNotificationPreferences`;
const getNotificationPreferencesUrl = `https://southamerica-east1-${project}.cloudfunctions.net/getNotificationPreferences`;
const successMessage = {
  title: "Informações salvas com sucesso",
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const NotificationsPage = () => {
  // router
  const { query } = useRouter();
  // state
  const [preferences, setPreferences] =
    React.useState<NotificationPreferences>();
  const [isLoading, setIsLoading] = React.useState(false);
  // handlers
  const toast = useToast();
  const handlePreferencesUpdate = async () => {
    const { flavor, id, notificationPreferencesToken } = query;
    if (!flavor || !id || !notificationPreferencesToken) {
      toast({
        duration: 6000,
        render: () => (
          <CustomToast
            type="error"
            message={{ title: "Parâmetros não encontrados" }}
          />
        ),
      });
      return;
    }
    setIsLoading(true);
    const data = {
      id,
      flavor,
      notificationPreferencesToken,
      notificationPreferences: preferences,
    };
    try {
      await axios.post(updateNotificationPreferencesUrl, data, { headers });
      setIsLoading(false);
      toast({
        duration: 4000,
        render: () => <CustomToast type="success" message={successMessage} />,
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast({
        duration: 6000,
        render: () => <CustomToast type="error" />,
      });
    }
  };
  // side effects
  React.useEffect(() => {
    const { flavor, id, notificationPreferencesToken } = query;
    if (!flavor || !id || !notificationPreferencesToken) return;
    (async () => {
      try {
        const response = await axios.get(getNotificationPreferencesUrl, {
          headers,
          params: {
            id,
            flavor,
            notificationPreferencesToken,
          },
        });
        const editablePreferences =
          response.data.notificationPreferences?.filter(
            (pref: string) => !["order-update", "order-chat"].includes(pref)
          ) ?? [];
        setPreferences(editablePreferences);
      } catch (error) {
        console.error(error);
        setPreferences(initialState);
      }
    })();
  }, [query]);
  // UI
  return (
    <Flex mt="-80px" flexDir="column">
      <Heading as="h2" fontSize="lg">
        Escolha que tipo de comunicações deseja receber do AppJusto:
      </Heading>
      {preferences === undefined ? (
        <HStack mt="4">
          <Text fontSize="lg">Carregando suas preferências</Text>
          <Spinner size="sm" />
        </HStack>
      ) : (
        <>
          <CheckboxGroup
            value={preferences}
            onChange={(values: NotificationPreferences) =>
              setPreferences(values)
            }
          >
            <VStack mt="8" alignItems="flex-start" maxW="400px" spacing={3}>
              <Box>
                <Checkbox size="sm" fontWeight="700" value="status">
                  Comunicações operacionais
                </Checkbox>
                <Text fontSize="1rem" color="gray.800">
                  Para saber sobre novas versões, atualizações do app e mais.
                </Text>
              </Box>
              <Box>
                <Checkbox size="sm" fontWeight="700" value="general">
                  Comunicações institucionais
                </Checkbox>
                <Text fontSize="1rem" color="gray.800">
                  Para conhecer mais sobre o AppJusto: propósito, impacto,
                  crescimento, financiamento e mais.
                </Text>
              </Box>
              <Box>
                <Checkbox size="sm" fontWeight="700" value="marketing">
                  Promoções e ofertas
                </Checkbox>
                <Text fontSize="1rem" color="gray.800">
                  Avisar sobre promoções e ofertas referentes aos restaurantes
                  da rede.
                </Text>
              </Box>
            </VStack>
          </CheckboxGroup>
          {preferences.length === 0 && (
            <Text mt="4" fontWeight="700">
              Você optou por não receber nenhum dos tipos de comunicação
              mencionados acima.
            </Text>
          )}
          <Button
            mt="8"
            variant="primary"
            size="lg"
            maxW="400px"
            onClick={handlePreferencesUpdate}
            isLoading={isLoading}
            loadingText="Salvando"
          >
            Salvar alterações
          </Button>
        </>
      )}
    </Flex>
  );
};
