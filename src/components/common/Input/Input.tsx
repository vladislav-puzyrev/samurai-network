import React from 'react'
import styles from './Input.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

type PropTypes = {
  placeholder?: string
  type?: string
  id?: string
  style?: React.CSSProperties
  input?: WrappedFieldInputProps
  meta?: WrappedFieldMetaProps
}

const Input: React.FC<PropTypes> = ({ placeholder, meta, input, type, id, style = {} }) => {
  const isError = meta ? meta.error && meta.touched : false
  const checkBoxStyle = (type === 'checkbox') ? { width: 'auto' } : {}

  return (
    <span>
      <input
        id={id}
        type={type}
        style={Object.assign(style, checkBoxStyle)}
        className={styles.input}
        placeholder={placeholder}
        {...input}
      />
      {isError && meta && <span className={styles.error}>{meta.error}</span>}
    </span>
  )
}

export default Input
