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
  onKeyDown?: any
  bottom?: boolean
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
        {...input}
        onKeyDown={onKeyDown}
      />
      {isError && <span className={(isError || null) && styles.error}>{meta.error}</span>}
    </span>
  )
}

export default Textarea
