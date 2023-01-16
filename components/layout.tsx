import Footer from './footer'
import Meta from './meta'
import { Navbar } from './navigation'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
