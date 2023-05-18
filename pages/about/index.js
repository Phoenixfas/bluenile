import style from '../../styles/About.module.css'
import About from './About'
import Hero from './Hero'
import Head from 'next/head'
import Service from './Service'

export default function about() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | About Us</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <About />
        <h1 style={{fontSize: "2.5rem", fontWeight: "300", width: '100%', textAlign: "center" }}>About Our Services</h1>
        <Service />
    </div>
  )
}
