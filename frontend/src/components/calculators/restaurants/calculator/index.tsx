import {
  Box,
  Flex,
  Image,
  Text,
  TextProps,
  HStack,
  Link,
} from "@chakra-ui/react";
import Container from "src/components/Container";
import Section from "src/components/Section";
import Input from "src/components/CustomNumberInput";
import { useState, useEffect } from "react";
import { CurrencyInput } from "src/components/CurrencyInput";
import { formattedRawValue, getAdminLink } from "src/components/../utils";
import CustomLinkButton from "src/components/CustomLinkButton";

const BlockHeading = ({ children }: TextProps) => {
  return (
    <Text fontSize="28px" lineHeight="30px" color="black" textStyle="p">
      {children}
    </Text>
  );
};

const InputQuestion = ({ children, ...props }: TextProps) => {
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
  );
};

const RestaurantCalculator: React.FC = () => {
  const [fee, setFee] = useState("");
  const [revenues, setRevenues] = useState(0);
  const [orders, setOrders] = useState("");
  const [stores, setStores] = useState("1");
  const [email, setEmail] = useState("");
  const [appjustoValue, setAppjustoValue] = useState(0);
  const [competitorValue, setCompetitorValue] = useState(0);

  // helpers
  const adminLink = getAdminLink();
  const stopCalc =
    revenues === 0 ||
    isNaN(parseInt(orders)) ||
    parseInt(orders) === 0 ||
    isNaN(parseFloat(fee.replace(",", ".")));

  const getIntStr = (value: number) => {
    return parseInt(value.toString()).toString();
  };
  const appjustoMonthlyValueToDisplay = () => {
    if (stopCalc) return "R$ 00.000,00";
    if (!isNaN(appjustoValue))
      return formattedRawValue(getIntStr(appjustoValue));
    else return "R$ 00.000,00";
  };

  const appjustoYearlyValueToDisplay = () => {
    if (stopCalc) return "R$ 00.000,00";
    const yarly = appjustoValue * 12;
    if (!isNaN(appjustoValue)) return formattedRawValue(getIntStr(yarly));
    else return "R$ 00.000,00";
  };

  const competitorMonthlyValueToDisplay = () => {
    if (stopCalc) return "R$ 00.000,00";
    if (!isNaN(competitorValue))
      return formattedRawValue(getIntStr(competitorValue));
    else return "R$ 00.000,00";
  };

  const competitorYearlyValueToDisplay = () => {
    if (stopCalc) return "R$ 00.000,00";
    const yarly = competitorValue * 12;
    if (!isNaN(competitorValue)) return formattedRawValue(getIntStr(yarly));
    else return "R$ 00.000,00";
  };

  const monthlyDiff = () => {
    if (stopCalc) return "R$ 00.000,00";
    if (!isNaN(appjustoValue) && !isNaN(competitorValue)) {
      const diff = competitorValue - appjustoValue;
      return formattedRawValue(getIntStr(diff));
    } else return "R$ 00.000,00";
  };
  const yearlyDiff = () => {
    if (stopCalc) return "R$ 00.000,00";
    if (!isNaN(appjustoValue) && !isNaN(competitorValue)) {
      const diff = (competitorValue - appjustoValue) * 12;
      return formattedRawValue(getIntStr(diff));
    } else return "R$ 00.000,00";
  };

  useEffect(() => {
    const appjustoFee = 0.0742;
    const feeValue = parseFloat(fee.replace(",", ".")) / 100;
    const revenuesValue = revenues;
    const ordersValue = parseInt(orders);
    //const storesValue = parseInt(stores);
    const appjustoResult = () => {
      const feeTotal = appjustoFee * revenuesValue + ordersValue * 9;
      setAppjustoValue(feeTotal);
    };
    const competitorResult = () => {
      const feeTotal = feeValue * revenuesValue;
      setCompetitorValue(feeTotal);
    };
    appjustoResult();
    competitorResult();
  }, [fee, revenues, orders, stores]);

  return (
    <Section id="restaurant-calculator">
      <Container pt="12" pb="24">
        <Flex flexDir={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            minW={{ md: "500px" }}
            flexDir="column"
            alignItems="flex-start"
          >
            <BlockHeading>Faça as contas</BlockHeading>
            <InputQuestion mt="8">
              Qual a sua taxa negociada com atual serviço de delivery?
            </InputQuestion>
            <Input
              id="fee"
              label="Taxa negociada (%)"
              placeholder="% 00"
              value={fee}
              onChange={(ev) => setFee(ev.target.value)}
              maxLength={5}
              onBlur={() => {
                if (parseFloat(fee.replace(",", ".")) > 100) setFee("100");
              }}
            />
            <InputQuestion mt="4">
              Qual o seu faturamento mensal em delivery (média)?
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
            {/*<InputQuestion mt="4">
              Qual a quantidade de lojas do seu restaurante?
            </InputQuestion>
            <Input
              id="stores"
              label="Lojas"
              placeholder="0"
              value={stores}
              onChange={(ev) => setStores(ev.target.value)}
            />*/}
            <Flex
              mt="16"
              w="100%"
              maxW={{ md: "500px" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Box>
                <HStack spacing={2}>
                  <Image src="/green-check.svg" w="14px" h="15px" />
                  <Text textStyle="p" fontSize="20px" lineHeight="26px">
                    Total no AppJusto
                  </Text>
                </HStack>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Por mês você paga
                </Text>
                <Text
                  mt="1"
                  textStyle="p"
                  fontSize="3xl"
                  lineHeight="30px"
                  color="#4EA031"
                >
                  {appjustoMonthlyValueToDisplay()}
                </Text>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Previsão para 12 meses
                </Text>
                <Text
                  mt="1"
                  textStyle="p"
                  fontSize="3xl"
                  lineHeight="30px"
                  color="#4EA031"
                >
                  {appjustoYearlyValueToDisplay()}
                </Text>
              </Box>
              <Box mt={{ base: "8", md: "0" }}>
                <HStack spacing={2}>
                  <Image src="/icon-close.svg" w="20px" h="20px" />
                  <Text textStyle="p" fontSize="20px" lineHeight="26px">
                    Total no concorrente
                  </Text>
                </HStack>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Por mês você paga
                </Text>
                <Text
                  mt="1"
                  textStyle="p"
                  fontSize="3xl"
                  lineHeight="30px"
                  color="#DC3545"
                >
                  {competitorMonthlyValueToDisplay()}
                </Text>
                <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
                  Previsão para 12 meses
                </Text>
                <Text
                  mt="1"
                  textStyle="p"
                  fontSize="3xl"
                  lineHeight="30px"
                  color="#DC3545"
                >
                  {competitorYearlyValueToDisplay()}
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            mt={{ base: "16", lg: "0" }}
            flexDir="column"
            w="100%"
            pl={{ lg: "12" }}
            alignItems={{ lg: "flex-end" }}
          >
            <Box
              display={{ base: "none", md: "block" }}
              pr={{ base: "2", md: "32" }}
              maxW="464px"
            >
              <BlockHeading>Base de cálculo</BlockHeading>
              <Text
                mt="8"
                textStyle="p"
                color="#697667"
                fontSize="16px"
                lineHeight="22px"
              >
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
                - Cartão de crédito: 2,42% + R$ 0,09
              </Text>
              <Text ml="2" textStyle="p" fontSize="15px">
                - Pix: 0,99% (compensa em 24h)
              </Text>
            </Box>
            <Box
              mt={{ base: "30px", md: "60px" }}
              bg="#F6F6F6"
              borderRadius="lg"
              p="24px"
              minW={{ xl: "464px" }}
            >
              <Text textStyle="p" fontSize="24px" lineHeight="30px">
                Economia utilizando o AppJusto
              </Text>
              <Text mt="8" textStyle="p" fontSize="20px" lineHeight="26px">
                Economia por mês
              </Text>
              <Text
                mt="2"
                textStyle="p"
                fontSize="48px"
                lineHeight="57.6px"
                color="#4EA031"
              >
                {monthlyDiff()}
              </Text>
              <Text mt="8" textStyle="p" fontSize="20px" lineHeight="26px">
                Economia para 12 meses
              </Text>
              <Text
                mt="2"
                textStyle="p"
                fontSize="48px"
                lineHeight="57.6px"
                color="#4EA031"
              >
                {yearlyDiff()}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box mt="16" w="100%" maxW="500px">
          <Text textStyle="p" fontSize="28px" lineHeight="30px">
            Faça o seu cadastro!
          </Text>
          <Text mt="4" textStyle="p" fontSize="lg" lineHeight="26px">
            O AppJusto tem muito mais vantagens para o seu restaurante.
            Cadastre-se agora e faça parte desse movimento.
          </Text>
          <CustomLinkButton
            mt="6"
            h="48px"
            maxW={{ md: "304px" }}
            name="admin"
            linkLabel="Cadastrar restaurante"
            variant="secondary"
            link={adminLink}
            isExternal
          />
          <HStack mt="8">
            <Box>
              <Image src="/arrow-right.svg" />
            </Box>
            <Link
              href="https://appjusto.freshdesk.com/"
              fontSize="lg"
              fontWeight="700"
              lineHeight="26px"
              textDecor="underline"
              _focus={{ outline: "none" }}
              isExternal
            >
              Saiba mais sobre o AppJusto
            </Link>
          </HStack>
        </Box>
        <Box
          mt="16"
          display={{ base: "block", md: "none" }}
          pr={{ base: "2", md: "32" }}
          maxW="464px"
        >
          <BlockHeading>Base de cálculo</BlockHeading>
          <Text
            mt="8"
            textStyle="p"
            color="#697667"
            fontSize="16px"
            lineHeight="22px"
          >
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
            - Cartão de crédito: 2,42% + 0,09%
          </Text>
          <Text ml="2" textStyle="p" fontSize="15px">
            - Pix: 0,99% + R$0,09 (compensa em 24h)
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

export default RestaurantCalculator;
