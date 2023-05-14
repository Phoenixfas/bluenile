import style from "../../styles/Contact.module.css"
import Contact from "./Contact"
import Hero from "./Hero"
import Map from "./Map"

export default function contact() {
  return (
    <div className={style.main}>
        <Hero />
        <Contact />
        <Map />
    </div>
  )
}
