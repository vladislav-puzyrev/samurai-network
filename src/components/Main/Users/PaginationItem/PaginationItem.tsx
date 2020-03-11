import React from 'react'
import styles from './PaginationItem.module.css'

type PropTypes = {
  active: boolean
  number: number
}

function PaginationItem (props: PropTypes) {
  const activeStyle = props.active ? styles.paginationItemActive : ''

  return (
    <li className={styles.paginationItem + ' ' + activeStyle}>{props.number}</li>
  )
}

export default PaginationItem
