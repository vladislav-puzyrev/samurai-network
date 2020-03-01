import React from 'react'
import styles from './Sidebar.module.css'
import Friends from './Friends/Friends'
import Menu from './Menu/Menu'

function Sidebar () {
  return (
    <aside className={styles.aside}>
      <Menu/>
      <Friends/>
    </aside>
  )
}

export default Sidebar