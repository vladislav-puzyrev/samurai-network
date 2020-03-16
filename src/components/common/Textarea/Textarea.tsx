import React from 'react'
import styles from './Textarea.module.css'

type PropTypes = {
  width?: number
  margin?: string
  placeholder?: string
  rows?: number
  cols?: number
  meta: any
  input: any
  id: string
}

const Textarea: React.FC<PropTypes> = ({ width, margin, placeholder, rows = 1, cols, meta, input, id }) => {
  const isError = meta.error && meta.touched

  return (
    <span>
      <textarea
        {...input}
        rows={rows}
        cols={cols}
        style={{ width, margin }}
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
      />
      {isError && <span className={(isError || null) && styles.error}>{meta.error}</span>}
    </span>
  )
}

export default Textarea