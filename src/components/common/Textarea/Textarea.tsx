import React from 'react'
import styles from './Textarea.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

type PropTypes = {
  placeholder?: string
  rows?: number
  cols?: number
  id?: string
  style?: React.CSSProperties
  spanStyle?: React.CSSProperties
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  input?: WrappedFieldInputProps
  meta?: WrappedFieldMetaProps
}

const Textarea: React.FC<PropTypes> = ({
  style, placeholder, rows = 1, cols, meta, input, id, value, onChange, onKeyDown, spanStyle
}) => {
  const isError = meta ? meta.error && meta.touched : false

  return (
    <span style={spanStyle} className={styles.span}>
      <textarea
        rows={rows}
        cols={cols}
        style={style}
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...input}
      />
      {isError && meta && <span className={styles.error}>{meta.error}</span>}
    </span>
  )
}

export default Textarea
