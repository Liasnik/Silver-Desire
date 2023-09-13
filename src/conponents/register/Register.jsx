import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './../../store/slices/userSlice'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/Silver-Desire/cabinet')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        console.log('щось не те...')
      })
  }

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      password have to include min 6 characters
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleRegister}>register</button>
    </div>
  )
}

export default Register
