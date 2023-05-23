import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import destinations from "../data/destinations";
import tours from "../data/tours";


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
                <p>Phone: +251 918 804 258</p>
                <p>Email: contact@bluenileexpeditions.com</p>
                <p>Address: Addis Ababa, Ethiopia</p>
                <div className="footer__socials">
                    <Link href="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
                    <Link href="https://www.instagram.com/bluenileexpeditions/" target="_blank"><FaInstagram /></Link>
                    <Link href="https://wa.me/+251918804258" target="_blank"><FaWhatsapp /></Link>
                </div>
            </div>
            <div className="footer__col">
                <h3>Destinations</h3>
                {destinations?.map((dest, index) => (
                    <Link key={index} href={`/destinations/${dest.id}`}>🡲 {dest.name}</Link>
                ))}
            </div>
            <div className="footer__col">
                <h3>Quick Links</h3>
                <Link href={"/whyeth"}>• Why Ethiopia</Link>
                <Link href={"/tours"}>• Tours By Experiences</Link>
                <Link href={"/ethio-tours"}>• Ethiopia Tours</Link>
                <Link href={"/about"}>• About Us</Link>
                <Link href={"/"}>• Contact Us</Link>
            </div>
        </div>
        <div className="footer__bottom">
            <p>&copy; 2023 BlueNileExpedition | Developed by <Link href={"https://t.me/ras_metat"}>FASIKA</Link></p>
        </div>
    </div>
  )
}
