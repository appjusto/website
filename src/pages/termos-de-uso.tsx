import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PageLayout from '../components/PageLayout'

export default function TermsOfUse() {
  return (
    <PageLayout pageName="Termos de uso" logo="/logo-pages.svg">
      <h1>Termos de uso</h1>
    </PageLayout>
  )
}