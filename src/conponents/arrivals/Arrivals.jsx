import Card from '../card/Card'
import styles from './arrivals.module.css'
import Hoodies from './../../image/categories/cat-01.jpg'
import Coats from './../../image/categories/cat-02.jpg'
import Tees from './../../image/categories/cat-03.jpg'

const Arrivals = () => {
  return (
    <section className={styles.arrivals}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>NEW ARRIVALS</span>
        </h1>
      </div>
      <div className={styles.card}>
        <Card img={Hoodies} text="Hoodies & Sweatshirt" />
        <Card img={Coats} text="Coats & Parkas" />
        <Card img={Tees} text="Tees & T-Shirt" />
      </div>
    </section>
  )
}

export default Arrivals
