import style from "../../styles/EthioTours.module.css"
import itineraries from "../../data/itineraries"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

export default function EthioTours() {
    const [id, setId] = useState()
    const [itinerary, setItinerary] = useState()
    const [activeTours, setActiveTours] = useState([])

    const addTour = (code) => {
        setActiveTours([...activeTours, code])
    }

    const removeTour = (code) => {
        setActiveTours(activeTours.filter(t => t !== code))
    }

    useEffect(() => {
        const hash = window.location.hash.split("#")[1];
        if (hash) {
            setId(hash)
            setItinerary(itineraries.find(i => i.id === hash))
        }else{
            setId(itineraries[0].id)
            setItinerary(itineraries[0])
        }

    }, [id])
  return (
    <div className={style.et}>
        <div className={style.et__l}>
            {itineraries?.map((i, index) => (
                <Link href={`#${i.id}`} key={index} className={`${style.et__l__name} ${i.id === id ? style.et__l__active : ""}`} onClick={() => setId(i.id)}>
                    <h3>{i.name}</h3>
                </Link>
            ))}
        </div>
        <div className={style.et__r}>
            {itinerary && (
                <>
                    <h1 id={itinerary.id}>{itinerary.name}</h1>
                    <div className={style.et__r__desc}>
                        <p>{itinerary.description}</p>
                    </div>
                    <div className={style.et__r__img}>
                        <Image src={itinerary.image} alt={itinerary.name} width={1000} height={800} quality={100} />
                    </div>
                    <h2>Tours</h2>
                    <div className={style.et__r__tours}>
                        {itinerary.tours.map((t, index) => (
                            <div className={style.et__tours__item} key={index}>
                                <div className={style.et__tours__item__name}><h3><span>{t.code}</span> {t.name}</h3> {activeTours.includes(t.code) ? <div className={style.et__tours__item__btn} onClick={() => removeTour(t.code)}>Less</div> : <div className={style.et__tours__item__btn} onClick={() => addTour(t.code)}>More</div>}</div>
                                {t.program && activeTours.includes(t.code) && (
                                    <div className={style.et__tours__item__detail}>
                                        <h3>Tour Program</h3>
                                        {t.program.map((p, index) => (
                                            <div className={style.et__tours__item__detail__item} key={index}>
                                                <h4>Day {p.day}</h4>
                                                <p>{p.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
  )
}
