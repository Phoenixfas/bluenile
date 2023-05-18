import { useRouter } from "next/router"
import style from '../../../styles/Destinations.module.css'
import destinations from "../../../data/destinations"
import { useEffect, useState } from "react"
import Image from "next/image"
import ToursListSide from "./ToursListSide"
import tours from "../../../data/tours"
import Head from "next/head"

export default function index() {
  return (
    <>
      <Head>
        <title>Blue Nile Expedition | Destinations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Destination />
    </>
  )
}

const Destination = () => {
    const router = useRouter()
    const { destId } = router.query
    const [dest, setDest] = useState({name: '', image: '', description: [], highlights: []})

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
                <div className={style.dest__left__name}>
                  <div className={style.dest__left__h1}>
                    <h1>{dest.name}</h1>
                    <p>{dest.motto}</p>
                  </div>
                </div>
              </div>
              <div className={style.dest__left__desc}>
                {dest.description.map((desc, index) => (
                  <p key={index}>• {desc}</p>
                ))}
                {/* <button onClick={() => setReadFull(!readFull)}>{readFull ? 'Read Less' : 'Read More'}</button> */}
              </div>
            </div>


            {/* <div className={style.dest__right}>
              <ToursListSide />
            </div> */}

            <div className={style.dest__highlights}>
              <h1>Highlights Of {dest.name}</h1>
              <div className={style.dest__highlights__list}>
                {dest.highlights.map((highlight, index) => (
                  <div key={index} className={style.dest__highlight}>
                    <h3>{highlight.name}</h3>
                    <p>{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.dest__left__desc}>
                  <h1 style={{fontSize: "2rem", fontWeight: "300", textAlign: "center", lineHeight: "2.8rem"}}>Your Ethiopian Journey Begins in Addis Ababa</h1>
                  <p>As you embark on your Ethiopian adventure, your journey will commence in Addis Ababa, the vibrant capital city. Serving as the gateway to Ethiopia, this bustling metropolis offers a blend of traditional charm and modern amenities. Spend a day or two exploring Addis, allowing yourself to absorb the vibrant culture, delve into the local markets, and savor the flavors of authentic Ethiopian cuisine.</p>
                  <p>Get ready to unlock the secrets of Ethiopia's major travel regions, where ancient wonders, breathtaking landscapes, and vibrant cultures intertwine. Each region holds a unique allure, and as you venture through them, you'll create cherished memories that will stay with you forever.  Blue Nile Expeditions welcomes you to embark on this extraordinary journey and invites you to experience the wonders of Ethiopia firsthand.</p>
            </div>

          </div>
        </div>
    )
}