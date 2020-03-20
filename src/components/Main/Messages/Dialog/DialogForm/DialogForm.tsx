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
    sendMessage(userID, message)
    setMessage('')
  }

  const onEnterMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (message.trim() && e.keyCode === 13) {
      sendMessage(userID, message.trim())
      setMessage('')
      e.preventDefault()
    }
  }

  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
    e.currentTarget.style.height = 'auto'
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
  }

  return (
    <div className={styles.wrapper}>
      <Textarea
        onChange={onChange}
        value={message}
        flexGrow
        style={{ maxHeight: '200px', resize: 'none', minHeight: '40px' }}
        placeholder='Напишите сообщение…'
        onKeyDown={onEnterMessage}
        bottom={true}
      />
      <Button height='40px' disabled={sendMessageFetching || !message.trim()} onClick={onSendMessage}
              margin='0 0 0 20px'>
        Отправить
      </Button>
    </div>
  )
}

export default DialogForm
