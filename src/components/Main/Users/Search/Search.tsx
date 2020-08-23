import React from 'react'
import styles from './Search.module.css'
import Button from '../../../common/Button/Button'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { setFriendMode } from '../../../../redux/users/actions'
import { getRequestUsers } from '../../../../redux/users/thunks'

type PropTypes = {
  setTerm: (term: string) => void
  setCurrentPage: (page: number) => void
  setPortionNumber: (number: number) => void
}

const Search = React.memo<PropTypes>(
  ({ setTerm, setCurrentPage, setPortionNumber }) => {
    const onReset = () => {
      setCurrentPage(1)
      setTerm('')
      setPortionNumber(1)
    }
    const dispatch = useDispatch()

    return (
      <div className={styles.div}>
        <Formik
          initialValues={{ term: '', friend: 'all' }}
          onSubmit={values => {
            setCurrentPage(1)
            dispatch(setFriendMode(values.friend === 'all' ? null : values.friend === 'followed'))
            setTerm(values.term)
            dispatch(getRequestUsers(6, 1, values.term))
            setPortionNumber(1)
          }}
        >
          {({ values, handleChange, isValid }) => (
            <Form>
              <input
                className={styles.input}
                placeholder='Поиск'
                type='text'
                name='term'
                onChange={handleChange}
                value={values.term}
              />
              <button
                className={styles.button}
                type='submit'
                disabled={!isValid}
              >
                Найти
              </button>
              <Field name='friend' as='select'>
                <option value='all'>Все</option>
                <option value='followed'>Подписки</option>
                <option value='unfollowed'>Не подписанные</option>
              </Field>
              <Button style={{ marginLeft: '10px' }} onClick={onReset} type='reset'>
                Сброс
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
)

export default React.memo(Search)
