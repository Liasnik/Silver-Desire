import React, { useState } from 'react'
import axios from 'axios'
import { ErrorMessage } from '../ErrorMessage'

const productData = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
}

export function CreateProduct({ onCreate }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }

    productData.title = value

    const response = await axios.post(
      'https://fakestoreapi.com/products',
      productData
    )

    onCreate(response.data)
  }

  return (
    <form action="#" onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  )
}
