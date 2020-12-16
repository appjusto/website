import PageLayout from '../components/PageLayout'
import Research from '../components/research'

import Logo from '../../public/logo-pages.svg'

export default function ResearchPage() {
  return (
    <PageLayout pageName="Pesquisa" logo={Logo}>
      <Research />
    </PageLayout>
  )
}
