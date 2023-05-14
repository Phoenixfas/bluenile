import style from "../../styles/Contact.module.css"

export default function Map() {
  return (
    <div className={style.mapHolder}>
        <div className={style.mapouter}>
            <div className={style.gmap_canvas}>
                <iframe
                    className={style.gmap_iframe}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.25579723684!2d38.61333138852229!3d8.96314036933367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1684074923566!5m2!1sen!2set"
                ></iframe>
            </div>
        </div>
    </div>
  )
}
