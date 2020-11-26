import { Flex, Heading, Text, Link, HeadingProps } from '@chakra-ui/react'

interface TextProps extends HeadingProps {
  text: string
}

const SectionTitle: React.FC<TextProps> = ({text, ...props}) => {
  return (
    <Heading 
      as="h2"
      fontSize="24px"
      lineHeight="26px"
      mb="26px"
      {...props}
    >
      {text}
    </Heading>
  )
} 

const Title: React.FC<TextProps> = ({text, ...props}) => {
  return (
    <Heading 
      as="h3"
      fontSize="16px"
      lineHeight="22px"
      {...props}
    >
      {text}
    </Heading>
  )
} 

const CustomSpan: React.FC<TextProps> = ({text, ...props}) => {
  return (
    <Text 
      textStyle="p"
      fontWeight="700"
      {...props}
    >
      {text}
    </Text>
  )
} 

const About: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      maxW="752px"
      pb="38px"
    >
      <SectionTitle text="Olá, somos o AppJusto" />
      <Title text="Como surgiu a ideia de criar o AppJusto?" />
      <Text textStyle="p" mb="26px">
        Durante a pandemia de 2020 o serviço de entregas se tornou essencial. 
        Ao mesmo tempo, tanto entregadores quanto restaurantes estavam muito 
        insatisfeitos com as condições impostas pelas plataformas. Ficou claro 
        que era preciso criar uma alternativa mais justa.
      </Text>
      <Title text="Vocês são uma empresa ou uma ONG?" />
      <Text textStyle="p" mb="26px">
        Somos uma empresa social! :) Um modelo de organização que busca gerar 
        impacto positivo na sociedade acima do lucro, mas que também busca ser 
        financeiramente sustentável sem depender continuamente da busca de doações.
      </Text>
      <Title 
        text="Quem são os fundadores/criadores do AppJusto?" 
        mb="26px"  
      />
      <Title text="Pedro Saulo de Andrade" />
      <Text textStyle="p" mb="26px">
        Cientista da computação e Desenvolvedor Full Stack, co-fundador de diversas 
        startups - Linkedin
      </Text>
      <Title text="Rogério A. Nogueira" />
      <Text textStyle="p" mb="26px">
        Co-fundador de startups premiadas, atua no planejamento estratégico, 
        desenvolvimento de softwares e projetos de tecnologia - Linkedin
      </Text>
      <Title text="Kellen Ribas" />
      <Text textStyle="p" mb="26px">
        Empreendedora social, co-fundadora e co-autora de negócios e projetos 
        premiados, atua com foco em inovação social, impacto e sustentabilidade 
        - Linkedin
      </Text>
      <Title text="Italo Monteiro" />
      <Text textStyle="p" mb="26px">
        Designer de produto com foco na experiência do usuário e construção de 
        interfaces visuais - Linkedin
      </Text>
      <Title text="Eduardo Araújo" />
      <Text textStyle="p" mb="26px">
        Advogado com experiência em consultoria e contencioso em diversas áreas 
        do direito - Linkedin
      </Text>
      <Title text="Daniel Lima" />
      <Text textStyle="p" mb="26px">
        Desenvolvedor Full Stack - Linkedin
      </Text>
      <SectionTitle mt="22px" text="Quais são os compromissos e valores do AppJusto" mb="0"/>
      <Text textStyle="p" mb="26px">
        Valores, missão e visão do AppJusto
      </Text>
      <Title text="> Nossos compromissos são:" mb="26px"/>
      <Text textStyle="p" mb="26px">
        <span style={{fontWeight: 700}}>Autonomia e participação - </span>Permitir 
        que os entregadores definam o valor do seu trabalho e suas condições 
        para participarem da plataforma, que restaurantes criem suas próprias estratégias, 
        e que ambos tenham a possibilidade de participar na evolução do projeto.
      </Text>
      <Text textStyle="p" mb="26px">
        <span style={{fontWeight: 700}}>Preço justo - </span>Cobrar o preço justo 
        de restaurantes e clientes, com o compromisso de redução das taxas quando possível, 
        conforme o crescimento sustentável da operação.
      </Text>
      <Text textStyle="p" mb="26px">
        <span style={{fontWeight: 700}}>Eficiência e sustentabilidade financeira - </span>
        Manter uma operação enxuta, investir em automação e descentralização 
        de processos, limite entre salário mais alto e mais baixo na empresa, e 
        alcançar o break-even rapidamente.
      </Text>
      <Text textStyle="p" mb="26px">
        <span style={{fontWeight: 700}}>Criação de um bem coletivo - </span>
        Tornar livre qualquer código produzido para a plataforma, oferecer a melhor 
        solução para os públicos de interesse para que todos estejam satisfeitos, 
        e não amarrados à plataforma.
      </Text>
      <Text textStyle="p" mb="26px">
        <span style={{fontWeight: 700}}>Transparência - </span>
        Transparência nas regras e preços da plataforma, tornar públicos todos os 
        dados, sempre que estes sejam de interesse da sociedade e que não impliquem 
        em quebra da privacidade de clientes, entregadores ou restaurantes.
      </Text>
      <Title text="> Nosso propósito/missão:" />
      <Text textStyle="p" mb="26px">
        Promover relações mais justas e equilibradas na economia de plataformas.
      </Text>
      <Title text="> Nossa visão:" />
      <Text textStyle="p" mb="26px">
        Um mundo mais justo e igualitário, onde a tecnologia é usada para gerar 
        impacto positivo na sociedade e as pessoas fazem escolhas que promovem o 
        bem coletivo.
      </Text>
      <SectionTitle mt="22px" text="Como contribuir com o AppJusto" />
      <Title text="Isso pode ser feito de várias maneiras:" mb="26px"/>
      <Title text="1. Chame amigos!" />
      <Text textStyle="p" mb="26px">
        Pode ser cliente, restaurante ou entregador. Quanto mais pré-cadastros 
        tivermos na sua cidade ou bairro, mais rápido o AppJusto pode chegar até 
        você.
      </Text>
      <Title text="2. Prefira o AppJusto" />
      <Text textStyle="p" mb="26px">
        Como cliente, restaurante ou entregador, baixe e use o AppJusto! ;)
      </Text>
      <Title text="3. Faça parte do nosso time" />
      <Text textStyle="p" mb="26px">
        Venha trabalhar conosco como colaborador ou voluntário! Acesse nosso 
        Linkedin e confira as vagas disponíveis.
      </Text>
      <Title text="4. Investindo no projeto" />
      <Text textStyle="p" mb="26px">
        Estamos buscando investidores para transformar esse sonho em realidade. 
        Se tiver interesse em saber mais, entre em contato.
      </Text>
      <Title text="5. Sendo uma empresa parceira ou organização aliada" />
      <Text textStyle="p" mb="26px">
        Empresas e organizações que apoiam oferecendo produtos ou serviços a condições
        especiais para os envolvidos na rede ou somando esforços em projetos em comum
        também são muito importantes. Entre em contato se quiser fazer parte.
      </Text>
      <SectionTitle mt="22px" text="Saiba mais sobre o AppJusto" />
      <Title text="Quem faz parte da rede do AppJusto?" />
      <Text textStyle="p" mb="26px">
        Donos e funcionários de restaurantes, entregadores e suas famílias, 
        associações de restaurantes e entregadores, clientes físicos e jurídicos, 
        empresas parceiras, demais provedores de soluções que venham a se integrar 
        ao sistema, colaboradores, voluntários e investidores-anjo do AppJusto.
      </Text>
      <Title 
        text="Vocês querem influenciar as políticas públicas? Vocês têm alguma 
          relação ou pretendem se aproximar de algum partido político ou candidato?" 
      />
      <Text textStyle="p" mb="26px">
        Nosso principal objetivo é contribuir para a construção de uma economia 
        de plataformas mais justa e equilibrada. As diversas plataformas que 
        surgiram nos últimos anos vem estabelecendo novas formas de conectar 
        consumidores, fornecedores e prestadores de serviços, o que pode ser 
        positivo e gerar trabalho e renda para muita gente. Mas a falta de leis 
        específicas para essa nova realidade resulta frequentemente em relações 
        de trabalho precárias, permite que as plataformas atuem de maneira 
        antiética e pouco responsável e pode gerar outros problemas graves para 
        o futuro da nossa sociedade. Por isso, acreditamos na importância do 
        diálogo com representantes do poder público, no âmbito municipal, 
        estadual e federal, para influenciar a criação de políticas públicas e 
        regulamentação da economia de plataformas, sem qualquer viés 
        político-partidário, e buscando defender o interesse coletivo para a 
        construção de um ecossistema mais justo e sustentável.
      </Text>
      <Title text="Como vocês geram impacto social?" />
      <Text textStyle="p" mb="26px">
        Nossos compromissos refletem parte da nossa abordagem e estratégia para 
        a construção de uma plataforma que promova relações mais justas e 
        equilibradas na economia de plataformas. Para atingir esse objetivo, 
        estamos trabalhando no desenvolvimento de uma plataforma de código aberto, 
        baseada em um modelo de negócios sustentável e participativo, que prove 
        que é possível sim, fazer negócio e fazer a diferença, inspirando assim 
        outras empresas a fazer o mesmo. Além disso, consideramos fundamental 
        promover o engajamento do consumidor, influenciar políticas públicas que 
        contribuam para um ecossistema mais justo e equilibrado e construir uma 
        rede de parceiros interessados em debater o tema a fim de encontrar, 
        juntos, soluções para uma sociedade mais justa :)
      </Text>
    </Flex>
  );
}

export default About;