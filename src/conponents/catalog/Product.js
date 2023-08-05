import { useState } from 'react'

export function Product({ product }) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = ['py-2 px-4 mt-2 border rounded', btnBgClassName]

  return (
    <div
      id="prod-cart"
      className=" py-2 px-4 rounded flex flex-col items-center mb-4 "
    >
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price} грн</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>{' '}
          </p>
        </div>
      )}
    </div>
  )
}
