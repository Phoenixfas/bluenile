import style from "../../styles/Tours.module.css"
import Hero from "./Hero"
import Tours from "./Tours"

export default function tours() {
  return (
    <div className={style.main}>
        <Hero />
        <Tours />
    </div>
  )
}
