import React from 'react'
import styles from './Textarea.module.css'

type PropTypes = {
  placeholder?: string
  rows?: number
  cols?: number
  meta?: any
  input?: any
  id?: string
  style?: any
  flexGrow?: boolean
  value?: string
  onChange?: any
}

const Textarea: React.FC<PropTypes> = ({ style, placeholder, rows = 1, cols, meta, input, id, flexGrow, value, onChange }) => {
  const isError = meta ? meta.error && meta.touched : null

  return (
    <span style={flexGrow ? { flexGrow: 1 } : undefined}>
      <textarea
        rows={rows}
        cols={cols}
        style={flexGrow ? Object.assign(style, { width: '100%' }) : style}
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        {...input}
      />
      {isError && <span className={(isError || null) && styles.error}>{meta.error}</span>}
    </span>
  )
}

export default Textarea
