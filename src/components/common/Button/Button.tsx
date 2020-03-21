import React from 'react'
import styles from './Button.module.css'

type PropTypes = {
  onClick?: (e: React.MouseEvent) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  style?: React.CSSProperties
}

const Button: React.FC<PropTypes> = ({ children, onClick, type, disabled, style }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={style}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
