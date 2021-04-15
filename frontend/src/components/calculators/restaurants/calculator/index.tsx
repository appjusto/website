import { Box, Flex, Text, TextProps, HStack, Button, Link } from "@chakra-ui/react";
import Container from "../../../Container";
import Section from "../../../Section";
import Input from '../../../CustomNumberInput';
import { useState, useEffect, ChangeEvent } from 'react';
import { CurrencyInput } from "../../../CurrencyInput";
import Image from "../../../Image";
import CustomInput from "../../../CustomInput";
import CustomButton from "../../../CustomButton";
import NextLink from 'next/link';

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
  const [email, setEmail] = useState('');
  return (
    <Section id="restaurant-calculator">
      <Container pt="12" pb="24">
        <Flex flexDir={{base: 'column' , lg: 'row'}}>
          <Flex w="100%" minW={{md: '500px'}} flexDir='column' alignItems="flex-start">
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
            <Flex mt="16" w="100%" maxW={{md: '500px'}} flexDir={{base: 'column', md: 'row'}} justifyContent="space-between">
              <Box>
                <HStack spacing={2}>
                  <Image src="/green-check.svg" w="14px" h="15px" eagerLoading />
                  <Text textStyle="p" fontSize="20px" lineHeight="26px">
                    Total no AppJusto
                  </Text>
                </HStack>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Por mês você paga
                </Text>
                <Text mt="1" textStyle="p" fontSize="3xl" lineHeight="30px" color="#4EA031">
                  R$ 00.000,00
                </Text>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Previsão para 12 meses
                </Text>
                <Text mt="1" textStyle="p" fontSize="3xl" lineHeight="30px" color="#4EA031">
                  R$ 00.000,00
                </Text>
              </Box>
              <Box mt={{base: '8', md: '0'}}>
                <HStack spacing={2}>
                  <Image src="/icon-close.svg" w="20px" h="20px" eagerLoading />
                  <Text textStyle="p" fontSize="20px" lineHeight="26px">
                    Total no concorrente
                  </Text>
                </HStack>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Por mês você paga
                </Text>
                <Text mt="1" textStyle="p" fontSize="3xl" lineHeight="30px" color="#DC3545">
                  R$ 00.000,00
                </Text>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Previsão para 12 meses
                </Text>
                <Text mt="1" textStyle="p" fontSize="3xl" lineHeight="30px" color="#DC3545">
                  R$ 00.000,00
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex mt={{base: '16', lg: '0'}} flexDir='column' w="100%" pl={{lg: '12'}} alignItems={{lg: "flex-end"}}>
            <Box display={{base: 'none', md: 'block'}} pr={{base: '2' , md: '32'}} maxW="464px">
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
            <Box mt={{base: '30px', md: '60px'}} bg="#F6F6F6" borderRadius="lg" p="24px" minW={{ xl: "464px"}}>
              <Text textStyle="p" fontSize="24px" lineHeight="30px">
                Economia utilizando o AppJusto
              </Text>
              <Text mt="8" textStyle="p" fontSize="20px" lineHeight="26px">
                Economia por mês
              </Text>
              <Text mt="2" textStyle="p" fontSize="48px" lineHeight="57.6px" color="#4EA031">
                R$ 00.000,00
              </Text>
              <Text mt="8" textStyle="p" fontSize="20px" lineHeight="26px">
                Economia para 12 meses
              </Text>
              <Text mt="2" textStyle="p" fontSize="48px" lineHeight="57.6px" color="#4EA031">
                R$ 00.000,00
              </Text>
              <Text mt="12" textStyle="p" fontSize="16px" lineHeight="22px" color="#697667">
                Envie essa simulação para o seu e-mail:
              </Text>
              <CustomInput
                mt="2"
                bg="white"
                type="email"
                id="registration-email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={email}
                handleChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
              <Button
                mt="8"
                h="48px"
                bg="#697667"
                color="white"
                border="none"
                w={{base: '100%', lg: '180px'}}
                fontFamily="barlow"
                fontSize="15px"
                lineHeight="21px"
                fontWeight="500">
                Enviar simulação
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Box mt={{base: '16', lg: '8'}} w="100%" maxW="500px">
          <Text textStyle="p" fontSize="28px" lineHeight="30px">
            Faça o seu cadastro!
          </Text>
          <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
            O AppJusto tem muito mais vantagens para o seu restaurante. Cadastre-se
            agora e faça parte desse movimento.
          </Text>
          <CustomButton
            mt="6"
            maxW={{md: "304px"}}
            type="submit"
            label="Cadastrar restaurante"
            variant="secondaryRegistration"
            link="https://admin.appjusto.com.br"
          />
          <HStack mt="8">
            <Box>
              <Image src='/arrow-right.svg' />
            </Box>
            <NextLink href="/sobre-o-appjusto" passHref>
              <Link ml="4" fontSize="lg" fontWeight="700" lineHeight="26px" textDecor="underline">
                Saiber mais sobre o AppJusto
              </Link>
            </NextLink>
          </HStack>
        </Box>
        <Box mt="16" display={{base: 'block', md: 'none'}} pr={{base: '2' , md: '32'}} maxW="464px">
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
      </Container>
    </Section>
  );
}

export default RestaurantCalculator;
