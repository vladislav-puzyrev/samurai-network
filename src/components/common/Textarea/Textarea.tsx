import React from 'react'
import styles from './Textarea.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

type PropTypes = {
  placeholder?: string
  rows?: number
  cols?: number
  id?: string
  style?: any
  flexGrow?: boolean
  value?: string
  onChange?: any
  onKeyDown?: any
  bottom?: boolean
  input?: WrappedFieldInputProps
  meta?: WrappedFieldMetaProps
}

const Textarea: React.FC<PropTypes> = ({
  style, placeholder, rows = 1, cols, meta, input, id, flexGrow, value, onChange, onKeyDown, bottom
}) => {
  const isError = meta ? meta.error && meta.touched : null

  return (
    <span style={flexGrow ? { flexGrow: 1 } : undefined}>
      <textarea
        rows={rows}
        cols={cols}
        style={flexGrow ? Object.assign(style, { width: '100%', transform: bottom ? 'translateY(3px)' : null }) : style}
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...input}
      />
      {isError && <span className={(isError || null) && styles.error}>{meta ? meta.error : ''}</span>}
    </span>
  )
}

export default Textarea
