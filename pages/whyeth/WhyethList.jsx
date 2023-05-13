import style from '../../styles/Whyeth.module.css'
import Image from 'next/image'
import whyethiopia from '../../data/whyethiopia'

export default function WhyethList() {
  return (
    <div className={style.whyeth}>
        <div className={style.whyeth__list}>
            {whyethiopia?.map((whyeth, index) => (
                <div key={index} className={style.whyeth__row}>
                    <div className={style.whyeth__row__l}>
                        <Image src={whyeth.img} alt={whyeth.title} width={300} height={300} />
                    </div>
                    <div className={style.whyeth__row__r}>
                        <h3>{whyeth.title}</h3>
                        <p>{whyeth.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
