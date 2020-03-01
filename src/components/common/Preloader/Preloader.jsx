import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif'

function Preloader () {
  return (
    <img className={styles.preloader} src={preloader} alt="load"/>
  )
}

export default Preloader