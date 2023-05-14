import Head from "next/head"
import style from "../../styles/Whyeth.module.css"
import Hero from "./Hero"
import WhyethList from "./WhyethList"

export default function whyeth() {
  return (
    <div className={style.main}>
        <Head>
          <title>Blue Nile Expedition | Why Ethiopia</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <WhyethList />
    </div>
  )
}
