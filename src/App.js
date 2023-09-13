import { Route, Routes } from 'react-router-dom'
import Home from './conponents/home/Home'
import { ProductPage } from './conponents/catalog/PageProducts'
import MyLayout from './conponents/MyLayuot'

import { UsersPages } from './conponents/users/UsersPage'
import ErrorPage from './conponents/ErrorPage'
import MyCabinet from './pages/cabinet/MyCabinet'
import Favorite from './pages/favorite/Favorite'
import LoginPage from './pages/login_page/LoginPage'
import Register from './pages/register-page/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/Silver-Desire" element={<MyLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<ProductPage />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="users" element={<UsersPages />} />
        <Route path="cabinet" element={<MyCabinet />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
