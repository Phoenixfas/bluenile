import style from "../../styles/Service.module.css"
import Hero from "./Hero"
import Service from "./Service"

export default function service() {
  return (
    <div className={style.main}>
        <Hero />
        <Service />
    </div>
  )
}
