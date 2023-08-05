import { Route, Routes } from 'react-router-dom'
import Home from './conponents/home/Home'
import { ProductPage } from './conponents/catalog/PageProducts'
import MyLayout from './conponents/MyLayuot'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<ProductPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
