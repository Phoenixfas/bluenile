import Image from 'next/image'
import style from '../../styles/About.module.css'
import about from '../../data/about'

export default function About() {
  return (
    <div className={style.about}>
        <div className={style.about__desc}>
            At Blue Nile Expeditions, our team is made up of passionate and knowledgeable individuals who are dedicated to providing our clients with exceptional service and unforgettable experiences. Here are some of the reasons why our team is the best choice for your next tour in Ethiopia:
        </div>
        <div className={style.about__list}>
            {about?.map((a, index) => (
                <div key={index} className={style.about__list__item}>
                    <div className={style.about__item__img}>
                        <Image src={a.img} alt={a.title} width={100} height={100} />
                        <div className={style.about__item__title}>
                            <h3>{a.title}</h3>
                        </div>
                    </div>
                    <div className={style.about__item__desc}>
                        <p>{a.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className={style.about__desc}>
            In short, at Blue Nile Expeditions, our team is the heart and soul of our company. We are dedicated to providing our clients with an unforgettable experience that will leave them with a deep appreciation for the beauty and diversity of Ethiopia. Contact us today to learn more about our team and start planning your next adventure.
        </div>
    </div>
  )
}
