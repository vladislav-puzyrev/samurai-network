import React from 'react'
import { required } from '../../../../../../utils/validators'
import { Field, reduxForm } from 'redux-form'
import Button from '../../../../../common/Button/Button'
import Input from '../../../../../common/Input/Input'
import Textarea from '../../../../../common/Textarea/Textarea'
import styles from './ProfileDataForm.module.css'

function ProfileDataForm ({ handleSubmit, error, profile }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}

      <h3>Основная информация</h3>

      <div className={styles.aboutMe}>
        <div>
          <label htmlFor='dataFormName'>ФИО:</label>
          <Field
            type='text'
            width='300px'
            placeholder='Имя'
            name='fullName'
            component={Input}
            validate={[required]}
            id='dataFormName'
          />
        </div>

        <div>
          <label htmlFor='dataFormWork'>Ищите работу:</label>
          <Field type='checkbox' name='lookingForAJob' component={Input} id='dataFormWork'/>
        </div>

        <div>
          <label htmlFor='dataFormSkills'>Ваши навыки:</label>
          <Field
            rows={2}
            width='300px'
            name='lookingForAJobDescription'
            component={Textarea}
            validate={[required]}
            id='dataFormSkills'
          />
        </div>

        <div>
          <label htmlFor='dataFormAbout'>О Вас:</label>
          <Field rows={2} width='300px' name='aboutMe' component={Textarea} validate={[required]} id='dataFormAbout'/>
        </div>
      </div>

      <hr/>

      <h3>Ваши контакты</h3>

      <div className={styles.myContacts}>
        {
          Object.keys(profile.contacts).map(key => (
            <div key={key}>
              <label htmlFor={'dataForm' + key}>{key[0].toUpperCase() + key.slice(1)}:</label>
              <Field
                type='text'
                width='300px'
                name={'contacts.' + key}
                component={Input}
                id={'dataForm' + key}
              />
            </div>
          ))
        }
      </div>

      <Button>Сохранить</Button>
    </form>
  )
}

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm)
