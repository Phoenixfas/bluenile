import style from "../../styles/EthioTours.module.css"
import EthioTours from "./EthioTours"
import Hero from "./Hero"

export default function index() {
  return (
    <div className={style.main}>
        <Hero  />
        <EthioTours />
    </div>
  )
}
