import Image from 'next/image'
import style from '../../styles/Tours.module.css'
import tours from "../../data/tours"

export default function Tours() {
  return (
    <div className={style.tours}>
        {tours?.map((tour, index) => (
            <div id={tour.id} key={index} className={style.tours__item}>
                <div className={style.tours__item__img}>
                    <Image src={tour.image} alt={tour.name} width={1920} height={1080} />
                    <div className={style.tours__item__title}>
                        <h2>{tour.name}</h2>
                    </div>
                </div>
                <div className={style.tours__item__text}>
                    <p>{tour.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
