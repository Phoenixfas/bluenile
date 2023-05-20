import Image from "next/image"
import style from "../styles/Tours.module.css"
import Link from "next/link"
import tours from "../data/itineraries"
import { useState, useEffect } from "react"

export default function ToursList() {
  const [t, setT] = useState([])

  useEffect(() => {
    const copiedTours = [...tours];
    setT(copiedTours.reverse().splice(0, 3));
  }, [tours])

  return (
    <div className={style.tourslist}>
      <h1>Ethiopia Tours</h1>
      <div className={style.tourslist__container}>

        {t.map((tour, index) => (
          <div key={index} className={style.tourslist__item}>
            <div className={style.tour__img}>
              <Image src={tour.image} alt={tour.name} width={600} height={600} />
            </div>
            <div className={style.tour__content}>
              <h2>{tour.name}</h2>
              {/* <p>Duration {tour.duration} days</p> */}
              <Link href={`/ethio-tours#${tour.id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
