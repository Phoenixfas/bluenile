import Head from 'next/head'
import style from '../styles/Home.module.css'
import Image from 'next/image'
import Hero from './Hero'
import Everything from './Everything'
import Welcome from './Welcome'
import ToursList from './ToursList'
import WhyEthiopia from './WhyEthiopia'
import Destinations from './Destinations'

export default function Home() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        
        <Hero />
        <Everything />
        <Welcome />
        <ToursList />
        <WhyEthiopia />
        <Destinations />
    </div>
  )
}
