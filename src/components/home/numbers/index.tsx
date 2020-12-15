import { useState, useEffect, useMemo } from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';
import HelpBox from './HelpBox'
import Button from "../../CustomButton"
import CustomLinkButton from '../../CustomLinkButton'; 

import { usePageContext, handleMessage } from '../../../context'

import { db } from '../../../../firebaseApp'

import Line from '../../../../public/line-vector-w.svg'
import Shield from '../../../../public//icon-shield.svg'
import Bike from '../../../../public//icon-bike.svg'
import Cutlery from '../../../../public//icon-cutlery.svg'
import Happy from '../../../../public//icon-happy.svg'
import Chat from '../../../../public//icon-chat-bubble.svg'
import Promotion from '../../../../public//icon-promotion.svg'
import Hfive from '../../../../public//icon-high-five.svg'

interface SummaryProps {
  cities: number
  consumers: number
  couriers: number
  restaurants: number
}

const Numbers: React.FC = () => {
  const [summary, setSummary] = useState<SummaryProps>({
    cities: 0,
    consumers: 0,
    couriers: 0,
    restaurants: 0
  })
  const { contextState, contextDispatch  } = usePageContext()
  const dbRef = useMemo(() => db.collection("summary").doc("data"),[])

  useEffect(() => {
    const observer = dbRef.onSnapshot(snaptshop => {
      const newSummary = snaptshop.data()
      if(newSummary) {
        setSummary(newSummary as SummaryProps)
      }
    })
    return observer
  }, [])

  const handleRecommendation = () => {
    handleMessage(contextDispatch, "")
    return contextDispatch({type: "handle_modalRecommendation"})
  }

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
          summary?.couriers > 99 && summary.restaurants > 99 && (
            <>
              <Heading 
                as="h1" 
                fontSize={["24px", null, null, "32px"]}
              >
                Se todos colaborarem, o sonho de uma plataforma justa se tornará realidade.
                <Box 
                  position="relative"
                  maxW={["240px", null, null, "320px"]}
                  ml={["24px", null, "350px", "480px"]}
                  mt={["-58px", null, "-64px", "-22px"]}
                  color="white"
                >
                  <img 
                    src="/line-vector-w.svg" 
                    alt="Linha branca"
                    width={544} 
                    height={20} 
                  />
                </Box>
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
                    icon={Shield}
                    altImg="Ícone de escudo"
                    number={summary.cities} 
                    label="Cidades" />
                  <NumberBox 
                    key="nb-couriers" 
                    icon={Bike} 
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
                    icon={Cutlery} 
                    altImg="Ícone de talhares"
                    number={summary.restaurants} 
                    label="Restaurantes" />
                  <NumberBox 
                    key="nb-consumers" 
                    icon={Happy}
                    altImg="Ícone de carinha feliz"
                    number={summary.consumers} 
                    label="Consumidores" />
                </Flex>
              </Flex>
            </>
          )
        }
        <Heading
          mt="64px" 
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
            icon={Chat}
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
            icon={Promotion}
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
            icon={Hfive}
            altImg="Ilustração de mãos se cumprimentando"
            title="Seja um parceiro"
            text="Tem interesse em atuar como voluntário, ser uma empresa parceira, investidor, ou acredita que pode colaborar de alguma outra maneira? Fale com a gente!"
            isLast={true}
          >
            <CustomLinkButton 
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