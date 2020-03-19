import React from 'react'
import styles from './Button.module.css'

type PropTypes = {
  width?: number
  onClick?: () => any
  margin?: string
  type?: any
  disabled?: boolean
}

const Button: React.FC<PropTypes> = ({ width, children, onClick, margin, type, disabled }) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} style={{ width, margin }} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
