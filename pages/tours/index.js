import Head from "next/head"
import style from "../../styles/Tours.module.css"
import Hero from "./Hero"
import Tours from "./Tours"

export default function tours() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | Tours By Experience</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Tours />
    </div>
  )
}
