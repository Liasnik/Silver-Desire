import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { CreateProduct } from '../createProduct/CreateProduct'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { Modal } from '../modal/Modal'
import { useProducts } from '../../hooks/useProducts'
import { Product } from './Product'
import '../style.css'
// import AddUser from '../add_user/AddUser'

export function ProductPage() {
  const { products, loading, error, addProduct } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  console.log(products)

  const createHandler = (product) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mt-10  mx-auto max-w-2xl p-5">
      <h1 style={{ color: 'white', fontSize: '40px' }}>Catalog</h1>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
          {/* <AddUser onCreate={createHandler} /> */}
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
