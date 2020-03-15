import React from 'react'
import styles from './Posts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../../utils/validators'
import Button from '../../../common/Button/Button'
import Textarea from '../../../common/Textarea/Textarea'

const maxLength = maxLengthCreator(10)

function Posts (props) {
  const postsElements = props.state.profilePage.posts.map(
    post => <Post key={post.id} text={post.text} likes={post.likes}/>
  ).reverse()

  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>Посты</h2>
      <AddNewPostFormRedux onSubmit={(formData) => { props.addPost(formData) }}/>
      <div className={styles.postsList}>
        {postsElements}
      </div>
    </div>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPost' })(AddNewPostForm)

function AddNewPostForm (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={styles.textarea}
          name='newPost'
          component={Textarea}
          placeholder='Что у вас нового?'
          validate={[required, maxLength]}
          width='100%'
          rows={2}
          margin='10px 0 0 0'
        />
      </div>
      <div>
        <Button margin='10px 0 0 0' className={styles.button}>Отправить</Button>
      </div>
    </form>
  )
}

export default Posts
