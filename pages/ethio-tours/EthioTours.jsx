import style from "../../styles/EthioTours.module.css"
import itineraries from "../../data/itineraries"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function EthioTours() {
    const [id, setId] = useState()
    const [itinerary, setItinerary] = useState()

    useEffect(() => {
        const hash = window.location.hash.split("#")[1];
        if (hash) {
            setId(hash)
            setItinerary(itineraries.find(i => i.id === hash))
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
                    <h1>{itinerary.name}</h1>
                    <div className={style.et__r__desc}>
                        <p>{itinerary.description}</p>
                    </div>
                    <div className={style.et__r__img}>
                        <Image src={itinerary.image} alt={itinerary.name} width={500} height={300} />
                    </div>
                    <h2>Tours</h2>
                    <div className={style.et__r__tours}>
                        {itinerary.tours.map((t, index) => (
                            <div className={style.et__tours__item} key={index}>
                                <h3><span>{t.code}</span> {t.name}</h3>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
  )
}
