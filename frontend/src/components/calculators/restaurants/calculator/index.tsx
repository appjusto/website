import { Box, Flex, Text, VStack, TextProps } from "@chakra-ui/react";
import Container from "../../../Container";
import Section from "../../../Section";
import Input from '../../../CustomNumberInput';
import { useState, useEffect } from 'react';
import { CurrencyInput } from "../../../CurrencyInput";

const BlockHeading = ({children}: TextProps) => {
  return (
    <Text fontSize="28px" lineHeight="30px" color="black" textStyle="p">
      {children}
    </Text>
  )
}

const InputQuestion = ({children, ...props}: TextProps) => {
  return (
    <Text
      mt="4"
      fontSize="16px"
      lineHeight="22px"
      color="#697667"
      textStyle="p"
      {...props}
    >
      {children}
    </Text>
  )
}

const RestaurantCalculator: React.FC = () => {
  const [fee, setFee] = useState('');
  const [revenues, setRevenues] = useState(0);
  const [orders, setOrders] = useState('');
  const [stores, setStores] = useState('');
  return (
    <Section id="restaurant-calculator">
      <Container py="12">
        <Flex flexDir={{base: 'column' , md: 'row'}}>
          <Flex w="100%" flexDir='column' alignItems="flex-start">
            <BlockHeading>
              Faça as contas
            </BlockHeading>
            <InputQuestion mt="8">
              Qual a sua taxa negociada com atual serviço de delivery?
            </InputQuestion>
            <Input
              id="fee"
              label="Taxa negociada (%)"
              placeholder="% 00"
              value={fee}
              onChange={(ev) => setFee(ev.target.value)}
            />
            <InputQuestion mt="4">
              Qual o seu faturamento mensal em delivery  (média)?
            </InputQuestion>
            <CurrencyInput
              id="revenues"
              label="Faturamento mensal"
              value={revenues}
              onChangeValue={(value) => setRevenues(value)}
            />
            <InputQuestion mt="4">
              Quantidade de pedidos mensais (média)?
            </InputQuestion>
            <Input
              id="orders"
              label="Pedidos mensais"
              placeholder="000"
              value={orders}
              onChange={(ev) => setOrders(ev.target.value)}
            />
            <InputQuestion mt="4">
              Qual a quantidade de lojas do seu restaurante?
            </InputQuestion>
            <Input
              id="stores"
              label="Lojas"
              placeholder="0"
              value={stores}
              onChange={(ev) => setStores(ev.target.value)}
            />
          </Flex>
          <Flex flexDir='column' w="100%">
            <Box pl={{base: '2' , md: '12'}} pr={{base: '2' , md: '32'}}>
              <BlockHeading>
                Base de cálculo
              </BlockHeading>
              <Text mt="8" textStyle="p" color="#697667" fontSize="16px" lineHeight="22px">
                Esses são todos os valores de referência que adotamos na nossa
                calculadora:
              </Text>
              <Text mt="2" textStyle="p" fontSize="15px" fontWeight="700">
                Appjusto
              </Text>
              <Text textStyle="p" fontSize="15px">
                • Taxa (menor do mercado) - 5%
              </Text>
              <Text textStyle="p" fontSize="15px">
                • Gateway de pagamento:
              </Text>
              <Text ml="2" textStyle="p" fontSize="15px">
                - Cartão de crédito:  2,21% + 0,09%
              </Text>
              <Text ml="2" textStyle="p" fontSize="15px">
                - Pix: 0,99% + R$0,09 (compensa no mesmo dia)
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default RestaurantCalculator;
