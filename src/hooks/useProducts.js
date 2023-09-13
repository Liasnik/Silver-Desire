import { useEffect, useState } from 'react'
import axios from 'axios'
//import { Product } from '../components/Product'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product) {
    setProducts((prev) => [...prev, product])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get(
        'https://fakestoreapi.com/products?limit=20'
      )
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      // const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return { products, error, loading: loading, addProduct }
}
