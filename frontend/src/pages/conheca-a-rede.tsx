import Network from '../components/network'
import PageLayout from '../components/PageLayout'

import Logo from '../../public/logo-pages.svg'

export default function Net() {
  return (
    <PageLayout pageName="Conheça a rede" logo={Logo}>
      <Network />
    </PageLayout>
  )
}