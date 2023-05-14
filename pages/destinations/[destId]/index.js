import { useRouter } from "next/router"
import style from '../../../styles/Destinations.module.css'
import destinations from "../../../data/destinations"
import { useEffect, useState } from "react"
import Image from "next/image"
import ToursListSide from "./ToursListSide"
import tours from "../../../data/tours"

export default function index() {
  return (
    <Destination />
  )
}

const Destination = () => {
    const router = useRouter()
    const { destId } = router.query
    const [dest, setDest] = useState({name: '', image: '', description: []})

    const [readFull, setReadFull] = useState(false)

    useEffect(() => {
        if (destId) {
          const d = destinations.find(dest => dest.id === destId)
          if (d) {
            setDest(d)
          }else {
            router.push('/')
          }
        }
    }, [destId])
    
    return (
        <div className={style.main}>
          <div className={style.dest}>

            <div className={style.dest__left}>
              <div className={style.dest__left__img}>
                {dest.image !== '' && <Image src={dest.image} alt={dest.name} width={1920} height={1080} quality={100} priority/>}
                <div className={style.dest__left__name}><h1>{dest.name}</h1></div>
              </div>
              <div className={style.dest__left__desc}>
                {dest.description.slice(0, readFull ? dest.description.length : 2).map((desc, index) => (
                  <p key={index}>• {desc}</p>
                ))}
                <button onClick={() => setReadFull(!readFull)}>{readFull ? 'Read Less' : 'Read More'}</button>
              </div>
            </div>


            <div className={style.dest__right}>
              <ToursListSide />
            </div>

          </div>
        </div>
    )
}