import { Modal } from '../../conponents/modal/Modal'
import { Link } from 'react-router-dom'
import styles from './register.module.scss'
import Register from './../../conponents/register/Register'

const RegisterPage = () => {
  return (
    <div>
      <Modal title=" Register">
        <Register />
        <h2 className={styles.h2}>
          Already have an account? <Link to="/Silver-Desire/login">Log in</Link>{' '}
        </h2>
      </Modal>
    </div>
  )
}

export default RegisterPage
