import React from 'react'
import styles from './PaginationItem.module.css'

type PropTypes = {
  active: boolean
  number: number
}

const PaginationItem: React.FC<PropTypes> = ({ active, number }) => {
  const activeStyle = active ? styles.paginationItemActive : ''

  return (
    <li className={styles.paginationItem + ' ' + activeStyle} data-number={number}>{number}</li>
  )
}

export default PaginationItem
