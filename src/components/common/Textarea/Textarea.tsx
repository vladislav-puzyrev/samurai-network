import React from 'react'
import styles from './Textarea.module.css'

type PropTypes = {
  width?: number
  margin?: string
  placeholder?: string
  rows?: number
  cols?: number
}

const Textarea: React.FC<PropTypes> = ({ width, margin, placeholder, rows = 1, cols }) => {
  return (
    <textarea rows={rows} cols={cols} style={{ width, margin }} className={styles.textarea} placeholder={placeholder}/>
  )
}

export default Textarea
