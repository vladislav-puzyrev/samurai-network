import React, { useState } from 'react'
import styles from './DialogForm.module.css'
import Textarea from '../../../../common/Textarea/Textarea'
import Button from '../../../../common/Button/Button'

type PropTypes = {
  sendMessage: (userID: number, message: string) => void
  startChatting: (userID: number) => void
  userID: number
}

const DialogForm: React.FC<PropTypes> = ({ sendMessage, startChatting, userID }) => {
  const [message, setMessage] = useState('')

  return (
    <div className={styles.wrapper}>
      <Textarea
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {setMessage(e.currentTarget.value)}}
        value={message}
        flexGrow
        style={{ height: '100%', resize: 'none' }}
        placeholder='Напишите сообщение…'
      />
      <Button onClick={() => {sendMessage(userID, message)}} margin='0 0 0 20px'>Отправить</Button>
    </div>
  )
}

export default DialogForm
