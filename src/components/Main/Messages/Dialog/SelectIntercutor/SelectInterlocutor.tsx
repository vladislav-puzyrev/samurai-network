import React from 'react'
import styles from './SelectInterlocutor.module.css'

const SelectInterlocutor: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.elem}>
        <div className={styles.messagesIMG}/>
        <div>Пожалуйста, выберите собеседника</div>
      </div>
    </div>
  )
}

export default SelectInterlocutor
