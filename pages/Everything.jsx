import Image from "next/image"
import style from "../styles/Home.module.css"

export default function Everything() {
  return (
    <div className={style.everything}>

        <div className={style.everything__con}>
            <div className={style.everything__con__l}>
                <Image src="/images/home/icons/plane.png" alt="plane" width={500} height={500} />
            </div>
            <div className={style.everything__con__r}>
                <h3>300+ DESTINATIONS</h3>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        <div className={style.everything__con}>
            <div className={style.everything__con__l}>
                <Image src="/images/home/icons/card.png" alt="plane" width={500} height={500} />
            </div>
            <div className={style.everything__con__r}>
                <h3>AFORDABLE PRICE</h3>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        <div className={style.everything__con}>
            <div className={style.everything__con__l}>
                <Image src="/images/home/icons/contacts.png" alt="plane" width={500} height={500} />
            </div>
            <div className={style.everything__con__r}>
                <h3>GREAT CUSTOMERS</h3>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        <div className={style.everything__con}>
            <div className={style.everything__con__l}>
                <Image src="/images/home/icons/hands.png" alt="plane" width={500} height={500} />
            </div>
            <div className={style.everything__con__r}>
                <h3>TRUSTED AND SAFE</h3>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>

    </div>
  )
}
