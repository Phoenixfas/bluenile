import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__bg">
            <Image src="/images/home/sunset.jpg" alt="footer-bg" width={1000} height={1000} quality={100} />
        </div>
        <div className="footer__top">
            <div className="footer__col">
                <div className="footer__logo">
                    <Image src="/images/logo/logo.png" alt="logo" width={200} height={200} />
                </div>
                <p><span>BlueNileExpeditions</span> is an experienced tour operator in Ethiopia, offering customized and authentic tours to explore this enchanting country&apos;s rich culture, history, and nature. </p>
            </div>
            <div className="footer__col">
                <h3>Get In Touch</h3>
                <p>Phone: +251 911 458 821</p>
                <p>Email: hello@bluenileexpedition.com</p>
                <p>Address: Addis Ababa, Ethiopia</p>
                <div className="footer__socials">
                    <Link href="https://www.facebook.com/BlueNileExpeditions/" target="_blank"><FaFacebook /></Link>
                    <Link href="https://www.instagram.com/bluenileexpeditions/" target="_blank"><FaInstagram /></Link>
                    <Link href="https://twitter.com/BlueNileExpedi1" target="_blank"><FaTwitter /></Link>
                    <Link href="https://www.linkedin.com/company/bluenileexpeditions/" target="_blank"><FaLinkedin /></Link>
                </div>
            </div>
            <div className="footer__col">
                <h3>Destinations</h3>
                <Link href={"/"}>🡲 The Northern Circuit</Link>
                <Link href={"/"}>🡲 The Southern Circuit</Link>
                <Link href={"/"}>🡲 The Eastern Circuit</Link>
                <Link href={"/"}>🡲 The Western Circuit</Link>
            </div>
            <div className="footer__col">
                <h3>Quick Links</h3>
                <Link href={"/"}>• Why Ethiopia</Link>
                <Link href={"/"}>• Tours By Experiences</Link>
                <Link href={"/"}>• Popular Ethiopia Tours</Link>
                <Link href={"/"}>• Our Service</Link>
                <Link href={"/"}>• About Us</Link>
            </div>
        </div>
        <div className="footer__bottom">
            <p>&copy; 2023 BlueNileExpedition - All rights reserved</p>
        </div>
    </div>
  )
}
