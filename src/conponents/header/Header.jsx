import style from './header.module.css'
// import logo from './../../image/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import { Modal } from '../modal/Modal'
import AddUser from '../add_user/AddUser'
import { useState } from 'react'
import logo from './../../image/jewelry/264_055-20849.png'

const Header = () => {
  const [modal, setModal] = useState(false)

  function handlerClose() {
    setModal(!modal)
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">CATALOGUE</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">FASHION</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">FAVOURITE</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">LIFESTYLE</NavLink>
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
                  <AddUser modal={modal} setModal={setModal} />
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
