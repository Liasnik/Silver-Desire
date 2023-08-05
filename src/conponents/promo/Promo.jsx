import styles from './promo.module.css'
import headerImg from './../../image/images/header-img.jpg'
import { NavLink } from 'react-router-dom'

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.title}>
              <span className={styles.highlight}>
                <span>LET’S </span>
              </span>
              EXPLORE
              <span
                className={styles.highlight2}
                // style={{ backgroundColor: 'yellow' }}
              >
                <span>UNIQUE</span>
              </span>
              JEWELRY
            </div>
            <div className={styles.description}>
              {' '}
              Live for Influential and Innovative fashion!
            </div>
            <div className={styles.wrapperButton}>
              <NavLink to="/catalog" className={styles.button}>
                Shop Now
              </NavLink>
            </div>
          </div>

          <div>
            <img className={styles.img} src={headerImg} alt="promoImg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
