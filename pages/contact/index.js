import Head from "next/head"
import style from "../../styles/Contact.module.css"
import Contact from "./Contact"
import Hero from "./Hero"
import Map from "./Map"

export default function contact() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | Contact Us</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Contact />
        <Map />
    </div>
  )
}
