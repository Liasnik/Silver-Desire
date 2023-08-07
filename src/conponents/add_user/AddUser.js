import React, { useState } from 'react'
import styles from './addUser.module.css'
import ReactInputMask from 'react-input-mask'
import axios from 'axios'
import { ErrorMessage } from '../ErrorMessage'

const AddUser = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [city, setCity] = useState('')
  const [maskedValue, setMaskedValue] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorLastName, setErrorLastName] = useState('')
  const [errorConfirm, setErrorConfirm] = useState('')
  const [errorCountSymbol, setErrorCountSymbol] = useState('')

  function capitalize(string) {
    return string.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())
  }

  const productData = {
    title: name,
    price: email,
    description: maskedValue,
    image: 'https://i.pravatar.cc',
    category: lastname,
  }

  // const userData = {
  //   email: email,
  //   username: name,
  //   password: password,
  //   name: {
  //     firstname: name,
  //     lastname: lastname,
  //   },
  //   address: {
  //     city: city,
  //     street: 'Geroyiv Polku Azov',
  //     number: 28,
  //     zipcode: '12926-3874',
  //     geolocation: {
  //       lat: '-37.3159',
  //       long: '81.1496',
  //     },
  //   },
  //   phone: maskedValue,
  // }

  async function handleSubmit(e) {
    e.preventDefault()

    if (name.trim().length === 0 || !/^\D+$/.test(name)) {
      setErrorName('Please enter valid Name')
      return
    }
    if (lastname.trim().length === 0 || !/^\D+$/.test(lastname)) {
      setErrorLastName('Please enter valid Lastname')
      return
    }
    if (password !== passConfirm) {
      setErrorConfirm('Please enter the same data')
      return
    }

    if (password.length < 3) {
      return setErrorCountSymbol('минимум 8 символов')
    }

    try {
      const response = await axios.post(
        'https://fakestoreapi.com/products',
        productData
      )
      console.log(response.data)
      onCreate(response.data)
    } catch (error) {}
  }

  const handleEmailChange = (event) => {
    const inputValue = event.target.value
    setEmail(inputValue)
  }

  return (
    <form className={styles.addUser} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setErrorName('')
          setName(capitalize(e.target.value))
        }}
        placeholder="Name"
      />
      {errorName && <ErrorMessage error={errorName} />}
      <input
        value={lastname}
        onChange={(e) => {
          setErrorLastName('')
          setLastname(capitalize(e.target.value))
        }}
        type="text"
        placeholder="Lastname"
      />
      {errorLastName && <ErrorMessage error={errorLastName} />}
      <input
        value={city}
        onChange={(e) => {
          setErrorLastName('')
          setCity(e.target.value)
        }}
        type="text"
        placeholder="City"
      />
      <ReactInputMask
        value={maskedValue}
        onChange={(event) => {
          setMaskedValue(event.target.value)
        }}
        mask="+99 (999) 999-99-99"
        placeholder="+99 (999) 999-99-99"
      />
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
          setErrorConfirm('')
        }}
        placeholder="password"
      />
      {errorConfirm && <ErrorMessage error={errorConfirm} />}
      {errorCountSymbol && <ErrorMessage error={errorCountSymbol} />}
      <input
        type="password"
        value={passConfirm}
        onChange={(event) => {
          setPassConfirm(event.target.value)
          setErrorConfirm('')
        }}
        placeholder="confirm password"
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default AddUser
