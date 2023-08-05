import styles from './brands.module.css'
import Amazon from './../../image/brands/Amazon.png'
import HandM from './../../image/brands/HM.png'
import Lacoste from './../../image/brands/Lacoste.png'
import Levis from './../../image/brands/Levis.png'
import Obey from './../../image/brands/Obey.png'

const Brands = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.brandsList}>
        <li>
          <a href="#!">
            <img src={Amazon} alt="image" />
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={HandM} alt="image" />
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={Lacoste} alt="image" />
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={Levis} alt="image" />
          </a>
        </li>
        <li>
          <a href="#!">
            {' '}
            <img src={Obey} alt="image" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Brands
