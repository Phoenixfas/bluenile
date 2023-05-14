import style from '../../styles/About.module.css'
import About from './About'
import Hero from './Hero'
import Head from 'next/head'

export default function about() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | About Us</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <About />
    </div>
  )
}
