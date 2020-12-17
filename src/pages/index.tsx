import PageLayout from '../components/PageLayout'
import Hero from '../components/home/hero'
import Numbers from '../components/home/numbers'
import Monopoly from '../components/home/monopoly'
import Alternative from '../components/home/alternative'
import Partners from '../components/home/partners'
import Support from '../components/home/support'
import Commitment from '../components/home/commitment'
import ModalConfirmation from '../components/ModalConfirmation'
import ModalRecommendation from '../components/ModalRecommendation'
import CookiesBar from '../components/CookiesBar'

import Logo from '../../public/logo-home.svg'

import { usePageContext } from '../context'

export default function Home() {
  const { contextState } = usePageContext()
  return (
    <PageLayout pageName="Home" logo={Logo}>
      <Hero />
      <Alternative />
      <Numbers />
      <Monopoly />
      <Commitment />
      <Partners />
      <Support />
      <ModalConfirmation />
      <ModalRecommendation />
      {
        contextState?.showCookiesBar && <CookiesBar />
      }
    </PageLayout>
  )
}
