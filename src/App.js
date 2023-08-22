import { Route, Routes } from 'react-router-dom'
import Home from './conponents/home/Home'
import { ProductPage } from './conponents/catalog/PageProducts'
import MyLayout from './conponents/MyLayuot'
import { BrowserRouter } from 'react-router-dom'
import { UsersPages } from './conponents/users/UsersPage'
import ErrorPage from './conponents/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Silver-Desire" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<ProductPage />} />
          <Route path="users" element={<UsersPages />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
