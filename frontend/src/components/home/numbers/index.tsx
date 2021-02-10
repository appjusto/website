import { useState, useEffect } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';
import HelpBox from './HelpBox'
import Button from "../../CustomButton"
import CustomLinkButton from '../../CustomLinkButton';
import { usePageContext, handleMessage } from '../../../context'
import Line from '../../Line'

interface SummaryProps {
  cities: number
  consumers: number
  couriers: number
  restaurants: number
}

const initParam = 99;

const Numbers: React.FC = () => {
  const [summary, setSummary] = useState<SummaryProps>({
    cities: 0,
    consumers: 0,
    couriers: 0,
    restaurants: 0
  })
  const { contextState, contextDispatch, dbSummaryRef } = usePageContext()

  useEffect(() => {
    const observer = dbSummaryRef?.onSnapshot(snaptshop => {
      const newSummary = snaptshop.data()
      if(newSummary) {
        setSummary(newSummary as SummaryProps)
      }
    })
    return observer
  }, [dbSummaryRef])

  const handleRecommendation = () => {
    handleMessage(contextDispatch, "")
    return contextDispatch({type: "handle_modalRecommendation"})
  }

  const hasNumbers = summary?.couriers > initParam && summary.restaurants > initParam;

  return (
    <Section
      id="numbers"
      bgColor="primary"
      minHeight="100vh"
    >
      <Container
        flexDir="column"
        pt="64px"
        pb="64px"
      >
        {
          hasNumbers && (
            <>
              <Heading
                as="h1"
                fontSize={["24px", null, null, "32px"]}
                mb={["20px", null, "36px","0"]}
              >
                Se todos colaborarem, o sonho de uma plataforma justa se tornará realidade.
                <Line
                  maxW={["240px", null, null, "320px"]}
                  ml={["24px", null, "350px", "480px"]}
                  mt={["-40px", null, "-44px", "0"]}
                />
              </Heading>
              <Text
                mt="16px"
                textStyle="p"
                fontSize={["16px", null, null, "18px"]}>
                Pré-cadastros até o momento:
              </Text>
              <Flex
                w="100%"
                flexDir={["column", null, null, "row"]}
              >
                <Flex
                  w="100%"
                  flexDir="row"
                >
                  <NumberBox
                    key="nb-cities"
                    icon="/icon-shield.svg"
                    altImg="Ícone de escudo"
                    number={summary.cities}
                    label="Cidades" />
                  <NumberBox
                    key="nb-couriers"
                    icon="/icon-bike.svg"
                    altImg="Ícone de entregador numa moto"
                    number={summary.couriers}
                    label="Entregadores" />
                </Flex>
                <Flex
                  w="100%"
                  flexDir="row"
                >
                  <NumberBox
                    key="nb-restaurants"
                    icon="/icon-cutlery.svg"
                    altImg="Ícone de talhares"
                    number={summary.restaurants}
                    label="Restaurantes" />
                  <NumberBox
                    key="nb-consumers"
                    icon="/icon-happy.svg"
                    altImg="Ícone de carinha feliz"
                    number={summary.consumers}
                    label="Consumidores" />
                </Flex>
              </Flex>
            </>
          )
        }
        <Heading
          mt={hasNumbers ? "64px" : "0"}
          as="h1"
          fontSize={["24px", null, null, "32px"]}
        >
          Ajude este movimento a crescer!
        </Heading>
        <Text
          textStyle="p"
          fontSize={["16px", null, null, "18px"]}>
          Entenda como você pode colaborar para que o AppJusto chegue mais longe:
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
        >
          <HelpBox
            icon="/icon-chat-bubble.svg"
            altImg="Ilustração de caixa de mensagens com um check e um x"
            title="Responda a pesquisa"
            text="Estamos ouvindo clientes, entregadores e restaurantes para criar uma plataforma pensada desde o início para todos."
            isLast={false}
          >
            <Button
              link="/pesquisa"
              label="Responder pesquisa"
              variant="secondaryLight"/>
          </HelpBox>
          <HelpBox
            icon="/icon-promotion.svg"
            altImg="Ilustração de auto-falante"
            title="Indique o AppJusto"
            text="Espalhe a notícia para seus amigos! Convide possíveis clientes, entregadores e donos de restaurantes, e ajude esta rede a crescer."
            isLast={false}
          >
            <Button
              label="Indicar o AppJusto"
              variant="secondaryLight"
              handleClick={handleRecommendation}
            />
          </HelpBox>
          <HelpBox
            icon="/icon-high-five.svg"
            altImg="Ilustração de mãos se cumprimentando"
            title="Seja um parceiro"
            text="Tem interesse em atuar como voluntário, ser uma empresa parceira, investidor, ou acredita que pode colaborar de alguma outra maneira? Fale com a gente!"
            isLast={true}
          >
            <CustomLinkButton
              name="partner1"
              link="mailto:parceiros@appjusto.com.br"
              linkLabel="Quero ser parceiro"
              variant="secondaryLight"
            />
          </HelpBox>
        </Flex>
      </Container>
    </Section>
  );
}

export default Numbers;
