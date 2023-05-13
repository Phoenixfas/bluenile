import style from '../../../styles/Destinations.module.css'
import tours from '../../../data/tours'
import Image from 'next/image'
import Link from 'next/link'

export default function ToursListSide() {

  return (
    <div className={style.tourslist}>
        {tours?.map((tour, index) => (
            <Link key={index} href={`/tours#${tour.id}`} className={style.tourslist__row}>
                <div className={style.tourslist__img}>
                    <Image src={tour.image} alt={tour.name} width={500} height={300} />
                </div>
                <h3>{tour.name}</h3>
            </Link>
        ))}
    </div>
  )
}
