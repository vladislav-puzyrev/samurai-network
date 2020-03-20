import React from 'react'
import styles from './Button.module.css'

type PropTypes = {
  width?: string
  onClick?: () => any
  margin?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  height?: string
}

const Button: React.FC<PropTypes> = ({ width, children, onClick, margin, type, disabled, height }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{ width, margin, height }}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
