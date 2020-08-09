import React from 'react'
import { required } from '../../../../../../utils/validators'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Button from '../../../../../common/Button/Button'
import Input from '../../../../../common/Input/Input'
import Textarea from '../../../../../common/Textarea/Textarea'
import styles from './ProfileDataForm.module.css'
import { ProfileType } from '../../../../../../types/types'

type PropTypes = {
  profile: ProfileType
  setEditMode: (editMode: boolean) => void
}

const ProfileDataForm: React.FC<InjectedFormProps<PropTypes> & PropTypes> = ({ handleSubmit, error, profile, setEditMode }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}

      <h3>Основная информация</h3>

      <div className={styles.aboutMe}>
        <div>
          <div className={styles.labelWrapper}>
            <label htmlFor='dataFormName'>ФИО:</label>
          </div>
          <Field
            type='text'
            placeholder='Имя'
            name='fullName'
            component={Input}
            validate={[required]}
            id='dataFormName'
          />
        </div>

        <div>
          <div className={styles.labelWrapper}>
            <label htmlFor='dataFormWork'>Ищите работу:</label>
          </div>
          <Field type='checkbox' name='lookingForAJob' component={Input} id='dataFormWork'/>
        </div>

        <div>
          <div className={styles.labelWrapper}>
            <label htmlFor='dataFormSkills'>Ваши навыки:</label>
          </div>
          <Field
            rows={2}
            name='lookingForAJobDescription'
            component={Textarea}
            validate={[required]}
            id='dataFormSkills'
          />
        </div>

        <div>
          <div className={styles.labelWrapper}>
            <label htmlFor='dataFormAbout'>О Вас:</label>
          </div>
          <Field
            rows={2}
            style={{ width: '280px' }}
            name='aboutMe'
            component={Textarea}
            validate={[required]}
            id='dataFormAbout'
          />
        </div>
      </div>

      <hr/>

      <h3>Ваши контакты</h3>

      <div className={styles.myContacts}>
        {
          Object.keys(profile.contacts).map(key => (
            <div key={key}>
              <div className={styles.labelWrapper}>
                <label htmlFor={'dataForm' + key}>{key[0].toUpperCase() + key.slice(1)}:</label>
              </div>
              <Field
                type='text'
                name={'contacts.' + key}
                component={Input}
                id={'dataForm' + key}
              />
            </div>
          ))
        }
      </div>

      <div className={styles.buttons}>
        <Button type='submit'>Сохранить</Button>
        <Button style={{ marginLeft: '10px' }} type='button' onClick={() => { setEditMode(false) }}>Отмена</Button>
      </div>
    </form>
  )
}

export default reduxForm<any, any>({ form: 'edit-profile' })((React.memo(ProfileDataForm)))
