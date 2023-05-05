import Image from "next/image";
import style from "../styles/Home.module.css"
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"

const variant1 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: [0, 0, 1],
        y: [20, 20, 0],
        transition: {
            delay: .5,
            duration: 1,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: .5,
            ease: "easeInOut"
        }
    }
}
const variant2 = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: [0, 0, 1],
        y: [-20, -20, 0],
        transition: {
            delay: .7,
            duration: 1,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: .5,
            ease: "easeInOut"
        }
    }
}


export default function Hero() {
    const [current, setCurrent] = useState(0)
    const slideRef = useRef(null)
    const length = slideRef.current ? slideRef.current.children.length : 0

    const nextSlide = () => {
        if (slideRef.current) {
            if (current === length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        }
    }

    const prevSlide = () => {
        if (slideRef.current) {
            if (current === 0) {
                setCurrent(length - 1)
            } else {
                setCurrent(current - 1)
            }
        }
    }

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateY(-${current * 100}%)`
        }

        const interval = setInterval(() => {
            if (slideRef.current) {
                if (current === length - 1) {
                    setCurrent(0)
                } else {
                    setCurrent(current + 1)
                }
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [current])

  return (
    <div className={style.hero}>
        <div className={style.hero__slider__container}>

            <div className={`${style.hero__slider__btn} ${style.prev}`}>
                <button onClick={prevSlide}> <FaChevronCircleLeft /> </button>
            </div>
            <div className={`${style.hero__slider__btn} ${style.next}`}>
                <button onClick={nextSlide}> <FaChevronCircleRight /> </button>
            </div>

            <div ref={slideRef} className={style.hero__slider}>
                <div className={style.hero__slide}>
                    <Image src="/images/home/simien1.jpg" alt="hero1" width={1920} height={1080} />
                    <motion.div className={style.hero__slide__content}>
                        <AnimatePresence>
                            {current === 0 && (
                                <>
                                    <motion.h1 variants={variant1} initial="hidden" animate="visible" exit="exit" >THE NORTHERN CIRCUIT</motion.h1>
                                    <motion.p variants={variant2} initial="hidden" animate="visible" exit="exit" >An experience that is truly unique and awe-inspiring.</motion.p>
                                    <motion.button variants={variant2} initial="hidden" animate="visible" exit="exit" >More Detail</motion.button>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className={style.hero__slide}>
                    <Image src="/images/home/omo.jpg" alt="hero1" width={1920} height={1080} />
                    <motion.div className={style.hero__slide__content}>
                        <AnimatePresence>
                            {current === 1 && (
                                <>
                                    <motion.h1 variants={variant1} initial="hidden" animate="visible" exit="exit" >THE SOUTHERN CIRCUIT</motion.h1>
                                    <motion.p variants={variant2} initial="hidden" animate="visible" exit="exit" >A land of breathtaking natural beauty and rich cultural diversity.</motion.p>
                                    <motion.button variants={variant2} initial="hidden" animate="visible" exit="exit" >More Detail</motion.button>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className={style.hero__slide}>
                    <Image src="/images/home/harar.jpg" alt="hero1" width={1920} height={1080} />
                    <motion.div className={style.hero__slide__content}>
                        <AnimatePresence>
                            {current === 2 && (
                                <>
                                    <motion.h1 variants={variant1} initial="hidden" animate="visible" exit="exit" >THE EASTERN CIRCUIT</motion.h1>
                                    <motion.p variants={variant2} initial="hidden" animate="visible" exit="exit" >Explore the stunning and culturally rich region of Eastern Ethiopia. </motion.p>
                                    <motion.button variants={variant2} initial="hidden" animate="visible" exit="exit" >More Detail</motion.button>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className={style.hero__slide}>
                    <Image src="/images/home/west.jpg" alt="hero1" width={1920} height={1080} />
                    <motion.div className={style.hero__slide__content}>
                        <AnimatePresence>
                            {current === 3 && (
                                <>
                                    <motion.h1 variants={variant1} initial="hidden" animate="visible" exit="exit" >THE WESTERN CIRCUIT</motion.h1>
                                    <motion.p variants={variant2} initial="hidden" animate="visible" exit="exit" >A region that boasts of breathtaking landscapes, incredible wildlife, and unparalleled ethnic diversity.</motion.p>
                                    <motion.button variants={variant2} initial="hidden" animate="visible" exit="exit" >More Detail</motion.button>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

