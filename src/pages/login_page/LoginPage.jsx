import Login from './../../conponents/login/Login'
import { Modal } from '../../conponents/modal/Modal'
import styles from './login.module.scss'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Modal title="Log In">
      <Login />
      <Link to="/Silver-Desire/register">
        <h2 className={styles.h2}>Or register</h2>
      </Link>
    </Modal>
  )
}

export default LoginPage
