import React from 'react'
import styles from './PaginationItem.module.css'

function PaginationItem (props) {
  const activeStyle = props.active ? styles.paginationItemActive : ''

  return (
    <li className={styles.paginationItem + ' ' + activeStyle}>{props.number}</li>
  )
}

export default PaginationItem