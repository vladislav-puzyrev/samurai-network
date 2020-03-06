import React from 'react'
import styles from './Wallpaper.module.css'

function Wallpaper () {
  return (
    <img
      className={styles.wallpaper}
      src='https://i.pinimg.com/originals/b3/cf/82/b3cf8221bf35baf3d4faa68473811fc9.jpg'
      alt='Обои'
    />
  )
}

export default Wallpaper
