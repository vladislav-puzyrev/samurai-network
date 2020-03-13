import React from 'react'
import styles from './Button.module.css'

type PropTypes = {
  width?: number
  onClick?: () => any
}

const Button: React.FC<PropTypes> = ({ width, children, onClick }) => {
  return (
    <button onClick={onClick} style={{ width }} className={styles.button}>{children}</button>
  )
}

export default Button
