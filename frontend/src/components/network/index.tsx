import { Flex } from '@chakra-ui/react'

import Column from './Column'
import NamesBox from './NamesBox'
import RoleTitle from './RoleTitle'
import NetworkNames from './NetworkNames'

const founders = [
  "Pedro Saulo de Andrade",
  "Rogério A. Nogueira",
  "Italo Monteiro",
  "Eduardo Araújo",
  "Daniel Lima"
]

const angelInvestors = [
  "Emiliano Graziano",
  "Claudio Neszlinger",
  "Gustavo Araújo",
  "Gisselle Lanza"
]

const partnerCompanies = [
  "IUGU",
  "NoRisk",
  "99jobs"
]

const partnerAssociations = [
  "Abrasel",
  "Coletivo Pinheiros",
  "ANR",
  "ABF"
]

const volunteers = [
  "Kellen Ribas",
  "Fábio Borges",
  "Cassio Horita",
  "Arthur Rufino",
  "Danilo Andrade",
  "Mônica Charoux",
  "Luis Coelho",
  "Emiliano Graziano ",
  "Rafael Ucha",
  "Tiago Barra",
  "Arthur (Malungo)",
  "Ian Guedes",
  "Rubens Dutra"
]

const team = [
  "Fernando Fuzii",
  "Pedro Dittmar",
  "Renan Costa"
]

const Network: React.FC = () => {
  return (
    <Flex
      w="100%"
      flexDir={["column", null,"row"]}
      mb="64px"
    >
      <Column>
        <NamesBox>
          <RoleTitle text="Sócios fundadores" />
          {
            founders.map( name => <NetworkNames key={name} text={name} />)
          }
        </NamesBox>
        <NamesBox>
          <RoleTitle text="Equipe" />
          {
            team.map(
              name => <NetworkNames key={name} text={name} />
            )
          }
        </NamesBox>
      </Column>
      <Column>
        <NamesBox>
          <RoleTitle text="Investidores anjos" />
          {
            angelInvestors.map(
              name => <NetworkNames key={name} text={name} />
            )
          }
        </NamesBox>
        <NamesBox>
          <RoleTitle text="Empresas parceiras" />
          {
            partnerCompanies.map(
              name => <NetworkNames key={name} text={name} />
            )
          }
        </NamesBox>
        <NamesBox>
          <RoleTitle text="Associações parceiras" />
          {
            partnerAssociations.map(
              name => <NetworkNames key={name} text={name} />
            )
          }
        </NamesBox>
      </Column>
      <Column>
        <NamesBox>
          <RoleTitle text="Voluntários ativos" />
          {
            volunteers.map(
              name => <NetworkNames key={name} text={name} />
            )
          }
        </NamesBox>
      </Column>
    </Flex>
  );
}

export default Network;
