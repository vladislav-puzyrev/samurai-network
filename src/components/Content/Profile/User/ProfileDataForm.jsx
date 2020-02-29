import React from 'react';
import {createField} from '../../../common/FormsControls/createField';
import {required} from '../../../../utils/validators/validators';
import {Field, reduxForm} from 'redux-form';

const Input = createField('input');
const Textarea = createField('textarea');

function ProfileDataForm(props) {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <button>Сохранить</button>
        </div>

        {props.error && <div>{props.error}</div>}

        <div>
          <div>
            <label>
              Имя:
              <Field type='text' placeholder='Имя' name='fullName'
                     component={Input} validate={[required]}/>
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
              <Field name='lookingForAJobDescription' component={Textarea}
                     validate={[required]}/>
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
              Object.keys(props.profile.contacts).map(key => {
                return <div key={key}>
                  <b>{key}</b>:
                  <Field type='text' placeholder={key} name={'contacts.' + key}
                         component={Input}/>
                </div>;
              })
            }
          </div>

        </div>
      </form>
  );
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);