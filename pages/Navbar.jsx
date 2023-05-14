import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenu } from "react-icons/hi"
import destinations from "../data/destinations";
import tours from "../data/tours";

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
              <Image src="/images/logo/logo.png" alt="BlueNileExpedition" width={800} height={800} quality={100} priority/>
          </div>
          <div className="nav__items">
              <Link href={"/"}>Home</Link>
              <Link href={"/whyeth"}>Why Ethiopia</Link>
              <div className="nav__dropdown">
                <div>Destinations {"▼"}</div>
                <div className="nav__dropdown_c">
                    {destinations?.map((dest, index) => (
                        <Link key={index} href={`/destinations/${dest.id}`}>{dest.name}</Link>
                    ))}
                </div>
              </div>
              <div className="nav__dropdown">
                <Link href={"/tours"}>Tours by experiences {"▼"}</Link>
                <div className="nav__dropdown_c">
                    {tours?.map((tour, index) => (
                        <Link key={index} href={`/tours#${tour.id}`} >{tour.name}</Link>
                    ))}
                </div>
              </div>
              <Link href={"/service"}>Our service</Link>
              <Link href={"/about"}>About us</Link>
              <Link href={"/contact"}>Contact us</Link>
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
              <Link href={"/whyeth"} className="navItems__item" onClick={() => toggleMobile()}>Why Ethiopia</Link>
              <div className="navItems__item nav__dropdown">
                  <div>Destinations {"▼"}</div>
                  <div style={{backgroundColor: "#252324"}} className="nav__dropdown_c">
                        {destinations.map((dest, index) => (
                            <Link key={index} href={`/destinations/${dest.id}`} onClick={() => toggleMobile()} >{dest.name}</Link>
                        ))}
                  </div>
              </div>
              <div href={"/"} className="navItems__item nav__dropdown">
                  <Link href={"/tours"} onClick={() => toggleMobile()}>Tours by experiences {"▼"}</Link>
                  <div style={{backgroundColor: "#252324"}} className="nav__dropdown_c">
                    {tours?.map((tour, index) => (
                        <Link key={index} href={`/tours#${tour.id}`} onClick={() => toggleMobile()}>{tour.name}</Link>
                    ))}
                  </div>
              </div>
              <Link href={"/service"} className="navItems__item" onClick={() => toggleMobile()}>Our service</Link>
              <Link href={"/about"} className="navItems__item" onClick={() => toggleMobile()}>About us</Link>
              <Link href={"/contact"} className="navItems__item" onClick={() => toggleMobile()}>Contact us</Link>
          </div>
      </div>
    </>
  )
}
