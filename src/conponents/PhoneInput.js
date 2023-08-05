import React, { useState } from 'react'

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value

    // Удаляем все, кроме цифр
    const numericValue = inputValue.replace(/\D/g, '')

    // Применяем маску для телефона (например, +X (XXX) XXX-XXXX)
    let formattedValue = ''
    if (numericValue.length > 0) {
      formattedValue += '+' + numericValue.substring(0, 2) + ' '
    }
    if (numericValue.length > 1) {
      formattedValue += '(' + numericValue.substring(2, 5) + ') '
    }
    if (numericValue.length > 4) {
      formattedValue += numericValue.substring(5, 8) + '-'
    }
    if (numericValue.length > 7) {
      formattedValue += numericValue.substring(8, 10) + '-'
    }
    if (numericValue.length > 9) {
      formattedValue += numericValue.substring(10, 12)
    }

    setPhoneNumber(formattedValue)
  }

  return (
    <input
      type="text"
      value={phoneNumber}
      onChange={handlePhoneChange}
      placeholder="Введите номер телефона"
    />
  )
}

export default PhoneInput
