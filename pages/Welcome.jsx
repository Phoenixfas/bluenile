import Image from "next/image"
import style from "../styles/Home.module.css"
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { useEffect, useRef} from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: .2 } },
    hidden: { opacity: 0, y: 100, transition: { duration: .5, } }
}

export default function Welcome() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-100px", once: false})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView, controls]);
  return (

    <div ref={ref} className={style.welcome}>
        <div className={style.welcome__img}>
            <Image src="/images/home/welcome.png" alt="Welcome" width={1000} height={500} quality={100} unoptimized />
        </div>
        <motion.p variants={variants1} animate={controls} className={style.welcome__text}>Welcome to Blue Nile Expeditions, your ultimate guide to exploring Ethiopia's vibrant culture, rich history, and stunning landscapes.</motion.p>
    </div>
  )
}
