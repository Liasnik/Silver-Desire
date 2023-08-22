import style from './header.module.css'

import { NavLink } from 'react-router-dom'
import { Modal } from '../modal/Modal'
import AddUser from '../add_user/AddUser'
import { useState } from 'react'
import logo from './../../image/jewelry/upload_15072023131132.png'
import { useProducts } from '../../hooks/useProducts'

const Header = () => {
  const [modal, setModal] = useState(false)
  const { products, loading, error, addProduct } = useProducts()

  function handlerClose() {
    setModal(!modal)
  }

  function onCreate(product) {
    setModal(false)
    addProduct(product)
  }

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.row}>
          <div className={style.logo}>
            <div className={style.logoImg}>
              <img src={logo} alt="logo" />
            </div>
            <span>Silver Desire</span>
          </div>

          <nav className={style.nav}>
            <ul>
              <li>
                <NavLink to="/Silver-Desire">HOME</NavLink>
              </li>
              <li>
                <NavLink to="catalog">CATALOGUE</NavLink>
              </li>
              <li>
                <NavLink to="catalog">FASHION</NavLink>
              </li>
              <li>
                <NavLink to="catalog">FAVORITE</NavLink>
              </li>
              <li>
                <NavLink to="users">USERS</NavLink>
              </li>
              <li>
                <button
                  onClick={() => setModal(!modal)}
                  className={style.signUp}
                >
                  SIGN UP
                </button>
              </li>
              {modal && (
                <Modal
                  onClose={handlerClose}
                  setModal={setModal}
                  title="Sign Up"
                >
                  <AddUser onCreate={onCreate} />
                </Modal>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
