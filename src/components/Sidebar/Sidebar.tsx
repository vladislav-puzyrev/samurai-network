import React from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'

function Sidebar () {
  return (
    <aside className={styles.aside}>
      <Menu/>
    </aside>
  )
}

export default Sidebar
