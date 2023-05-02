import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenu } from "react-icons/hi"

export default function Navbar() {
  const mobileRef = useRef(null)
    const [mobile, setMobile] = useState(false)
    
    const toggleMobile = () => {
        
        setMobile(!mobile)
        // console.log(mobile)
    }

    useEffect(() => {

        if (mobile) {
            mobileRef.current.style.transform = 'translateX(0%)'
        } else {
            mobileRef.current.style.transform = 'translateX(100%)'
        }

    }, [mobile])


  return (
    <>
      <div className="nav">
          <div className="nav__logo">
              <Image src="/images/logo/logo.png" alt="BlueNileExpedition" width={800} height={800} quality={100} />
          </div>
          <div className="nav__items">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Ethiopia speciality</Link>
              <div className="nav__dropdown">
                <div>Destinations {"▼"}</div>
                <div className="nav__dropdown_c">
                    <Link href={"/"} >The Northern Circuit</Link>
                    <Link href={"/"} >The Southern Circuit</Link>
                    <Link href={"/"} >The Eastern Circuit</Link>
                    <Link href={"/"} >The Western Circuit</Link>
                </div>
              </div>
              <div className="nav__dropdown">
                <div>Tours by experiences {"▼"}</div>
                <div className="nav__dropdown_c">
                    <Link href={"/"} >Historical Tours</Link>
                    <Link href={"/"} >Cultural Tours</Link>
                    <Link href={"/"} >Photographic Tours</Link>
                    <Link href={"/"} >Trekking and Hiking Tours</Link>
                    <Link href={"/"} >Wildlife Safaris</Link>
                    <Link href={"/"} >Food and Drink Tours</Link>
                </div>
              </div>
              <Link href={"/"}>Popular ethiopia tours</Link>
              <Link href={"/"}>Our service</Link>
              <Link href={"/"}>About us</Link>
          </div>

          <div className="nav__mobile" onClick={() => toggleMobile()}>
              <div className="nav__menuContainer">
                  <HiOutlineMenu />
              </div>
          </div>
      </div>

      <div ref={mobileRef} className="navItems__container__mobile">
          <div className="mobile__close" onClick={() => toggleMobile()}>
              <AiOutlineClose />
          </div>
          <div className="navItems__mobile">
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>Home</Link>
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>Ethiopia speciality</Link>
              <div className="navItems__item nav__dropdown">
                  <div>Destinations {"▼"}</div>
                  <div style={{backgroundColor: "#252324"}} className="nav__dropdown_c">
                      <Link href={"/"} onClick={() => toggleMobile()} >The Northern Circuit</Link>
                      <Link href={"/"} onClick={() => toggleMobile()} >The Southern Circuit</Link>
                      <Link href={"/"} onClick={() => toggleMobile()} >The Eastern Circuit</Link>
                      <Link href={"/"} onClick={() => toggleMobile()} >The Western Circuit</Link>
                  </div>
              </div>
              <div href={"/"} className="navItems__item nav__dropdown">
                  <div>Tours by experiences {"▼"}</div>
                  <div style={{backgroundColor: "#252324"}} className="nav__dropdown_c">
                    <Link href={"/"} >Historical Tours</Link>
                    <Link href={"/"} onClick={() => toggleMobile()} >Cultural Tours</Link>
                    <Link href={"/"} onClick={() => toggleMobile()} >Photographic Tours</Link>
                    <Link href={"/"} onClick={() => toggleMobile()} >Trekking and Hiking Tours</Link>
                    <Link href={"/"} onClick={() => toggleMobile()} >Wildlife Safaris</Link>
                    <Link href={"/"} onClick={() => toggleMobile()} >Food and Drink Tours</Link>
                  </div>
              </div>
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>Popular ethiopia tours</Link>
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>Our service</Link>
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>About us</Link>
          </div>
      </div>
    </>
  )
}
