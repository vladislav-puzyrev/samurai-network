import React from 'react'
import { required } from '../../../../../../utils/validators'
import { Field, reduxForm } from 'redux-form'
import Button from '../../../../../common/Button/Button'
import Input from '../../../../../common/Input/Input'
import Textarea from '../../../../../common/Textarea/Textarea'

function ProfileDataForm ({ handleSubmit, error, profile }) {

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}

      <div>
        <div>
          <label>
            Имя:
            <Field
              type='text' placeholder='Имя' name='fullName'
              component={Input} validate={[required]}
            />
          </label>
        </div>

        <div>
          <label>
            Ищу работу:
            <Field type='checkbox' name='lookingForAJob' component={Input}/>
          </label>
        </div>

        <div>
          <label>
            Мои навыки:
            <Field
              name='lookingForAJobDescription' component={Textarea}
              validate={[required]}
            />
          </label>
        </div>

        <div>
          <label>
            Обо мне:
            <Field name='aboutMe' component={Textarea} validate={[required]}/>
          </label>
        </div>

        <div>
          <b>Контакты</b>
          {
            Object.keys(profile.contacts).map(key => {
              return <div key={key}>
                <b>{key}</b>:
                <Field
                  type='text' placeholder={key} name={'contacts.' + key}
                  component={Input}
                />
              </div>
            })
          }
        </div>

      </div>

      <Button>Сохранить</Button>
    </form>
  )
}

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm)
