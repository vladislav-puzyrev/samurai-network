import React from 'react'
import styles from './Input.module.css'

type PropTypes = {
  width?: number
  margin?: string
  placeholder: string
}

const Input: React.FC<PropTypes> = ({ width, margin, placeholder }) => {
  return (
    <input style={{ width, margin }} className={styles.input} placeholder={placeholder}/>
  )
}

export default Input
