import React from 'react'
import styles from './Input.module.css'

type PropTypes = {
  width?: number
  margin?: string
  placeholder: string
  meta: any
  input: any
  type: string
  id: string
}

const Input: React.FC<PropTypes> = ({ width, margin, placeholder, meta, input, type, id }) => {
  const isError = meta.error && meta.touched

  return (
    <span className={(isError || null) && styles.error}>
      {isError && <span>{meta.error}</span>}
      <input
        {...input}
        id={id}
        type={type}
        style={{ width, margin }}
        className={styles.input}
        placeholder={placeholder}
      />
    </span>
  )
}

export default Input
