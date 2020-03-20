import React from 'react'
import styles from './Input.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

type PropTypes = {
  width?: number
  margin?: string
  placeholder: string
  type: string
  id: string
  style?: React.CSSProperties
  input?: WrappedFieldInputProps
  meta?: WrappedFieldMetaProps
}

const Input: React.FC<PropTypes> = ({ width, margin, placeholder, meta, input, type, id, style }) => {
  const isError = meta ? meta.error && meta.touched : ''

  return (
    <span>
      <input
        id={id}
        type={type}
        style={Object.assign({ width, margin }, style)}
        className={styles.input}
        placeholder={placeholder}
        {...input}
      />
      {isError && <span className={(isError || null) && styles.error}>{meta ? meta.error : ''}</span>}
    </span>
  )
}

export default Input
