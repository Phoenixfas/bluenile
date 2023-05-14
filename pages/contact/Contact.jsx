import style from "../../styles/Contact.module.css"
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdCall } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [done, setDone] = useState(false)
    const [error, setError] = useState("")


    const onSubmit = (e) => {
        // e.preventDefault()

        if(!name || !email || !subject || !message) {
            setError("Please fill all fields")
            setTimeout(() => setError(""), 5000)
            return
        }

    }

  return (
    <div className={style.contact}>
        <div className={style.contact__container}>
            <motion.div className={style.contact__card}>
                <div className={style.card__title}>Contact Info</div>
                <div className={style.card__content}>
                    <Link href={"mailto:hello@bluenileexpedition.com"} className={style.card__info}><SiGmail size={30} /> info@bluenileexpedition.com</Link>
                    <Link href={"https://maps.google.com"} target="_blank" className={style.card__info}><MdLocationPin size={30} /> Bole Around Edna Mall</Link>
                    <Link href={"tel:+251911121314"} className={style.card__info}><MdCall size={30} /> +251 911 121 314</Link>
                </div>
                <div className={style.card__socials}>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </Link>
                    <Link href="https://www.linkedin.com/company" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </Link>
                </div>
            </motion.div>

            <div className={style.contact__message}>
                <div className={style.message__title}>Send a Message</div>
                <form className={style.message__form} onSubmit={onSubmit} action="mailto:info@bluenileexpedition.com" method="post" encType="text/plain">
                    <div className={style.form__group}>
                        <label htmlFor="name">Name</label>
                        <input required type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={style.form__group}>
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={style.form__group}>
                        <label htmlFor="message">Message</label>
                        <textarea required name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
