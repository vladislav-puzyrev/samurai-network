import React, { useState } from 'react'
import styles from './DialogForm.module.css'
import Textarea from '../../../../common/Textarea/Textarea'
import Button from '../../../../common/Button/Button'

type PropTypes = {
  sendMessage: (userID: number, message: string) => void
  startChatting: (userID: number) => void
  userID: number
  sendMessageFetching: boolean
}

const DialogForm: React.FC<PropTypes> = ({ sendMessage, startChatting, userID, sendMessageFetching }) => {
  const [message, setMessage] = useState('')

  const onSendMessage = () => {
    setMessage('')
    sendMessage(userID, message)
  }

  return (
    <div className={styles.wrapper}>
      <Textarea
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {setMessage(e.currentTarget.value)}}
        value={message}
        flexGrow
        style={{ height: '100%', resize: 'none' }}
        placeholder='Напишите сообщение…'
      />
      <Button disabled={sendMessageFetching || !message} onClick={onSendMessage} margin='0 0 0 20px'>
        Отправить
      </Button>
    </div>
  )
}

export default DialogForm
