import style from './modal.module.css'

export function Modal({ children, title, onClose }) {
  return (
    <>
      <div className={style.drop} onClick={onClose} />
      <div className={style.modal}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  )
}
