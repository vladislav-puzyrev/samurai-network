import React from 'react'
import styles from './FormsControls.module.css'

export function createField (FormElement) {
  return function ({ meta, input, ...props }) {
    const isError = meta.error && meta.touched

    return (
      <span className={(isError || null) && styles.error}>
          <FormElement {...input} {...props}/>
        {isError && <span>{meta.error}</span>}
        </span>
    )
  }

}