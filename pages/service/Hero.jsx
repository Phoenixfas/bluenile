import style from '../../styles/Service.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Hero() {

  return (
    <div className={style.hero}>
        <ParallaxProvider>
            <Parallax speed={-20} className={style.hero__img}>
                <Image src='/images/home/abay.jpg' alt="Abay" fill />
            </Parallax>
        </ParallaxProvider>
        <div className={style.hero__text}>
            <motion.div initial={{y: "100%", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 5, stiffness: 50, bounce: 0.8, type: "spring" }} className={style.hero__text__title}>
                About Our Service
            </motion.div>
        </div>
    </div>
  )
}
