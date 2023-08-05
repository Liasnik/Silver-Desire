import React, { useState } from 'react'
import styles from './addUser.module.css'
import ReactInputMask from 'react-input-mask'
import PhoneInput from '../PhoneInput'

const AddUser = ({ setModal, modal }) => {
  const [value, setValue] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: value,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))

    setModal(!modal)
  }

  const handleEmailChange = (event) => {
    // Применяем маску для email (например, добавляем пробел после каждых 4 символов)
    const inputValue = event.target.value
    // const maskedEmail = inputValue.replace(/(.{4})/g, '$1 ')

    setEmail(inputValue)
  }

  return (
    <form className={styles.addUser} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="name"
      />
      <input type="text" placeholder="lastname" />
      <input type="text" placeholder="city" />
      <ReactInputMask
        mask="+99 (999) 999-99-99"
        placeholder="+99 (999) 999-99-99"
      />
      <PhoneInput />
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Введите email"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddUser
