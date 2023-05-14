import Head from "next/head"
import style from "../../styles/Service.module.css"
import Hero from "./Hero"
import Service from "./Service"

export default function service() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | Our Service</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Service />
    </div>
  )
}
