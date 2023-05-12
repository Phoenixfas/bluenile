import '../styles/globals.css'
import Footer from './Footer'
import Navbar from './Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
