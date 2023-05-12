import Image from "next/image"
import style from "../styles/Home.module.css"
import Link from "next/link"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

export default function Welcome() {
  return (
    <div className={style.welcome}>
        <div className={style.welcome__l}>
            {/* <ParallaxProvider>
                <div className={style.welcome__img__outer}>
                    <Parallax speed={-20} className={style.welcome__img}>
                        <Image src="/images/home/abay.jpg" alt="Welcome" width={500} height={500} quality={100} unoptimized />
                    </Parallax>
                </div>
            </ParallaxProvider> */}
            <div className={style.welcome__img}>
                <ParallaxProvider>
                    <Parallax speed={-20} className={style.welcome__img__inner}>
                            <Image src='/images/home/abay.jpg' alt="Welcome" fill />
                    </Parallax>
                </ParallaxProvider>
                </div>
        </div>
        <div className={style.welcome__r}>
            <h1 className={style.welcome__title}>Welcome to Blue Nile Expeditions</h1>
            <p>
                Welcome to Blue Nile Expeditions, your ultimate guide to exploring Ethiopia&apos;s vibrant culture, rich history, and stunning landscapes.
            </p>
            <p>
                Embark on a journey of a lifetime with our customized tours that cater to all your travel needs and preferences. Whether you are an adventure seeker, history buff, nature lover or a cultural enthusiast, we have got you covered.
            </p>
            <p>
                Our experienced and knowledgeable guides will take you off the beaten path and introduce you to the hidden gems of Ethiopia that will leave you in awe. From the breathtaking Simien Mountains to the historical Lalibela Churches, from the ancient city of Axum to the Danakil Depression, our tours are designed to immerse you in the true essence of Ethiopia.
            </p>
            <Link href="/about" className={style.welcome__btn}>Learn More</Link>
        </div>
    </div>
  )
}
