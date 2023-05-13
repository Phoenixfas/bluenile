import Image from "next/image"
import style from "../styles/Home.module.css"
import Link from "next/link"

export default function Destinations() {
  return (
    <div className={style.destination}>
        <div className={style.destination__container}>
            <div className={style.dest}>
                <div className={style.dest__img}>
                    <Image src="/images/home/hero/simien1.jpg" alt="north" width={500} height={1000} quality={100} />
                </div>
                <div className={style.dest__content}>
                    <p>As a visitor to Ethiopia, exploring the northern region is a must-see. Northern Ethiopia offers an experience that is truly unique and awe-inspiring. </p>
                    <Link href={`/destinations/1`}>More</Link>
                </div>
                <div className={style.dest__name}>The Northern Circuit</div>
            </div>
            <div className={style.dest}>
                <div className={style.dest__img}>
                    <Image src="/images/home/hero/omo.jpg" alt="south" width={500} height={1000} quality={100} />
                </div>
                <div className={style.dest__content}>
                    <p>Southern Ethiopia is a land of breathtaking natural beauty and rich cultural diversity, offering visitors a chance to experience the best of both worlds. </p>
                    <Link href={`/destinations/2`}>More</Link>
                </div>
                <div className={style.dest__name}>The Southern Circuit</div>
            </div>
            <div className={style.dest}>
                <div className={style.dest__img}>
                    <Image src="/images/home/hero/harar.jpg" alt="east" width={500} height={1000} quality={100} />
                </div>
                <div className={style.dest__content}>
                    <p>As a leading expedition company specializing in East African adventures, Blue Nile Expeditions is proud to offer our clients the chance to explore the stunning and culturally rich region of Eastern Ethiopia. </p>
                    <Link href={`/destinations/3`}>More</Link>
                </div>
                <div className={style.dest__name}>The Eastern Circuit</div>
            </div>
            <div className={style.dest}>
                <div className={style.dest__img}>
                    <Image src="/images/home/hero/west.jpg" alt="west" width={500} height={1000} quality={100} />
                </div>
                <div className={style.dest__content}>
                    <p>The wild and untamed Western Ethiopia, a region that boasts of breathtaking landscapes, incredible wildlife, and unparalleled ethnic diversity.</p>
                    <Link href={`/destinations/4`}>More</Link>
                </div>
                <div className={style.dest__name}>The Western Circuit</div>
            </div>
        </div>
    </div>
  )
}
