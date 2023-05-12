import Image from "next/image"
import style from "../styles/Home.module.css"

export default function WhyEthiopia() {
  return (
    <div className={style.whyeth}>
        <div className={style.whyeth__img}>
            {/* <Image src="/images/home/welcome.png" alt="whyeth" width={500} height={500} quality={100} unoptimized /> */}
        </div>
        <div className={style.whyeth__content}>
            <h1>Why Ethiopia Is So Special For Travelers</h1>
            <div className={style.whyeth__list}>
                <div className={style.whyeth__item}>
                    <h3>History and Culture</h3>
                    <p>Ethiopia is home to some of the oldest civilizations in the world. The country has a rich and diverse cultural heritage that spans over 3,000 years.</p>
                </div>
                <div className={style.whyeth__item}>
                    <h3>Scenery and Landscapes</h3>
                    <p>Ethiopia is a land of breathtaking natural beauty. From the rugged peaks of the Simien Mountains to the otherworldly landscapes of the Danakil Depression, Ethiopia&apos;s scenery is simply stunning.</p>
                </div>
                <div className={style.whyeth__item}>
                    <h3>Wildlife</h3>
                    <p>Ethiopia is home to an incredible array of wildlife, including the rare Ethiopian wolf, gelada baboons, and a variety of bird species.</p>
                </div>
                <div className={style.whyeth__item}>
                    <h3>Food</h3>
                    <p>Ethiopian cuisine is flavorful and unique, with a variety of stews, curries, and vegetarian dishes. Injera, a sourdough flatbread, is a staple of Ethiopian cuisine and is served with almost every meal.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
