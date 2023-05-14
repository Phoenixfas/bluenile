import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
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
                <p>Phone: +251 911 458 821</p>
                <p>Email: hello@bluenileexpedition.com</p>
                <p>Address: Addis Ababa, Ethiopia</p>
                <div className="footer__socials">
                    <Link href="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
                    <Link href="https://www.instagram.com/" target="_blank"><FaInstagram /></Link>
                    <Link href="https://twitter.com/" target="_blank"><FaTwitter /></Link>
                    <Link href="https://www.linkedin.com/company/" target="_blank"><FaLinkedin /></Link>
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
                <Link href={"/service"}>• Our Service</Link>
                <Link href={"/about"}>• About Us</Link>
                <Link href={"/"}>• Contact Us</Link>
            </div>
        </div>
        <div className="footer__bottom">
            <p>&copy; 2023 BlueNileExpedition - All rights reserved</p>
        </div>
    </div>
  )
}
