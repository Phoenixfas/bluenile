import Head from 'next/head'
import style from '../styles/Home.module.css'
import Image from 'next/image'
import Hero from './Hero'

export default function Home() {
  return (
    <div className={style.main}>
        <Head>
          <title>BlueNileExpeditions</title>
          <meta name="description" content="Blue Nile Expeditions" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo_cropped.png" />
        </Head>
        
        <Hero />
    </div>
  )
}
