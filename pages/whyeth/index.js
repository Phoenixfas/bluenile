import style from "../../styles/Whyeth.module.css"
import Hero from "./Hero"
import WhyethList from "./WhyethList"

export default function whyeth() {
  return (
    <div className={style.main}>
        <Hero />
        <WhyethList />
    </div>
  )
}
