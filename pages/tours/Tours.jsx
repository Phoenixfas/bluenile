import Image from 'next/image'
import style from '../../styles/Tours.module.css'
import tours from "../../data/tours"

export default function Tours() {
  return (
    <div className={style.tours}>
        <div>
          <p style={{textAlign: "center", fontSize: "1.2rem", fontWeight: "bold", color: "#307dab", marginBottom: "30px"}}>Welcome to Ethiopia, a land of ancient history, diverse cultures, stunning landscapes, and unique wildlife. Our tour company offers a wide range of exciting tour types that cater to the interests and preferences of travelers from all walks of life. Here are some of the tour types we organize in Ethiopia:</p>
        </div>
        
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
        
        <div>
          <p style={{textAlign: "center", fontSize: "1.2rem", fontWeight: "bold"}}>No matter what your interests are, we have the perfect tour for you. Our knowledgeable and experienced guides will ensure that you have an unforgettable experience and leave Ethiopia with memories that will last a lifetime. Contact us today to book your tour and start planning your adventure in Ethiopia!</p>
        </div>
    </div>
  )
}
