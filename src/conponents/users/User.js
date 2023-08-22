import { useState } from 'react'

export function User({ product: user }) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = ['py-2 px-4 mt-2 border rounded', btnBgClassName]

  return (
    <div
      id="prod-cart"
      className=" py-2 px-4 rounded flex flex-col items-center mb-4 "
    >
      <img src={user.image} className="w-1/6" alt={user.title} />
      <p>
        username: <span className="font-bold">{user?.username}</span>
      </p>
      <p>
        firstname: <span className="font-bold">{user.name?.firstname}</span>
        <span className="font-bold">{user.title}</span>
      </p>
      <p>
        lastname: <span className="font-bold">{user.name?.lastname}</span>
        <span className="font-bold">{user.category}</span>
      </p>
      <p>
        phone: <span className="font-bold">{user?.phone}</span>{' '}
        <span className="font-bold">{user.description}</span>{' '}
      </p>
      <p>
        {' '}
        email: <span className="font-bold">{user?.email}</span>{' '}
        <span className="font-bold">{user.price}</span>{' '}
      </p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide address' : 'Show address'}
      </button>
      {details && (
        <div>
          <p>
            city: <span className="font-bold">{user.address?.city}</span>
          </p>{' '}
          <p>
            street:{' '}
            <span className="font-bold">
              {user.address?.street} {user.address?.number}
            </span>
          </p>{' '}
          <p>
            geolocation:{' '}
            <p style={{ fontWeight: 'bold' }}>{user?.geolocation?.lat}</p>{' '}
            <p style={{ fontWeight: 'bold' }}>{user?.geolocation?.long}</p>{' '}
          </p>
        </div>
      )}
    </div>
  )
}
