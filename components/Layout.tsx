import * as React from 'react'
import Analytics from 'components/Analitics'
import Normilize from 'components/Normilize'
import Head from 'components/Head'
import Seo from 'components/Seo'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

interface Props {
  children?: React.ReactNode
  title?: string
}

const Layout: React.FC<Props> = props => (
  <>
    <Normilize />
    <Head title={props.title} />
    <Seo title={props.title} />
    <Nav />
    <main>
      {props.children}
    </main>
    <Footer />
    <Analytics />
  </>
)

export default Layout
