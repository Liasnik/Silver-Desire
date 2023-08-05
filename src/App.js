import { Route, Routes } from 'react-router-dom'
import Home from './conponents/home/Home'
import { ProductPage } from './conponents/catalog/PageProducts'
import MyLayout from './conponents/MyLayuot'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
