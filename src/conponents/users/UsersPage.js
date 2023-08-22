import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { Modal } from '../modal/Modal'
import '../style.css'
import AddUser from '../add_user/AddUser'
import axios from 'axios'
import { User } from './User'

export function UsersPages() {
  const { modal, open, close } = useContext(ModalContext)

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product) {
    setUsers((prev) => [...prev, product])
  }

  async function fetchUsers() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get('https://fakestoreapi.com/users')
      setUsers(response.data)
      setLoading(false)
    } catch (error) {
      // const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  console.log(users)

  const createHandler = (product) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mt-10  mx-auto max-w-2xl p-5">
      <h1 style={{ color: 'white', fontSize: '40px' }}>Users</h1>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {users.map((product) => (
        <User product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={close}>
          {/* <CreateProduct onCreate={createHandler} /> */}
          <AddUser onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        // onClick={open}
        onClick={open}
      >
        +
      </button>
    </div>
  )
}
