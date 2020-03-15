import React from 'react'
import styles from './Button.module.css'

type PropTypes = {
  width?: number
  onClick?: () => any
  margin?: string
}

const Button: React.FC<PropTypes> = ({ width, children, onClick, margin }) => {
  return (
    <button onClick={onClick} style={{ width, margin }} className={styles.button}>{children}</button>
  )
}

export default Button
