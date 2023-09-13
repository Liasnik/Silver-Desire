import { Navigate } from 'react-router-dom'
import { useAuth } from './../../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from './../../store/slices/userSlice'
import styles from './myCabinet.module.scss'

const MyCabinet = () => {
  const { isAuth, email } = useAuth()
  console.log(email)
  console.log(isAuth)
  const dispatch = useDispatch()

  return isAuth ? (
    <div className={styles.container}>
      <h1>MyCabinet</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
      <img src="" alt="" />
    </div>
  ) : (
    <Navigate to="/Silver-Desire/login" />
  )
}

export default MyCabinet
