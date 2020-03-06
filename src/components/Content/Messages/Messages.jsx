import React from 'react'
import styles from './Messages.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { createField } from '../../common/FormsControls/createField'
import { maxLengthCreator, required } from '../../../utils/validators/validators'

const maxLength = maxLengthCreator(10)
const Textarea = createField('textarea')

function Messages (props) {
  const dialogsElements = props.state.dialogs.map(
    dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.username} />
  )

  const messagesElements = props.state.messages.map(
    message => <Message
      key={message.id} name={message.username}
      message={message.message}
               />
  )

  return (
    <div className={styles.messages}>
      <div className={styles.output}>
        <ul className={styles.dialogs}>
          {dialogsElements}
        </ul>
        <ul className={styles.chat}>
          {messagesElements}
        </ul>
      </div>
      <AddMessageFormRedux
        onSubmit={(formData) => { props.buttonOnClick(formData) }}
      />
    </div>
  )
}

function AddMessageForm (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='message' validate={[required, maxLength]}
          component={Textarea}
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'addMessage' })(AddMessageForm)

export default Messages
