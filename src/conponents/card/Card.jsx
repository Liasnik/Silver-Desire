import styles from './card.module.css'
import icon from './../../image/icons/arrow.svg'

const Card = ({ img, text }) => {
  return (
    <section className={styles.card}>
      <a className={styles.card_link} href="#!">
        <img src={img} alt="foto" />
        <div className={styles.text}>
          <div>
            <h2>{text}</h2>
            <p>Explore Now!</p>
          </div>
          <div className={styles.icon}>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </a>
    </section>
  )
}

export default Card
