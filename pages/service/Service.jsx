import style from "../../styles/Service.module.css"
import Image from "next/image"
import services from "../../data/services"

export default function Service() {
  return (
    <div className={style.service}>
      <div className={style.service__desc}>
        Blue Nile Expeditions is an experienced tour operator in Ethiopia, offering customized and authentic tours to explore this enchanting country's rich culture, history, and nature. Our team of expert guides and travel planners work together to create unforgettable experiences for our clients. Here are some of the services we offer:
      </div>
      <div className={style.service__list}>
          {services?.map((item, index) => (
              <div key={index} className={style.service__item}>
                  <div className={style.service__item__img}>
                    <Image src={item.img} alt={item.name} width={1920} height={1080} quality={100}/>
                  </div>
                  <div className={style.service__item__content}>
                    <div className={style.service__item__border}>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
              </div>
          ))}
      </div>
      <div className={style.service__desc}>
        At Blue Nile Expeditions, we are committed to providing our clients with exceptional service and unforgettable experiences. Contact us today to start planning your dream tour of Ethiopia.
      </div>
    </div>
  )
}
