import React from 'react'
import styles from './Posts.module.css'
import Post from './Post/Post'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators'
import Button from '../../../common/Button/Button'
import Textarea from '../../../common/Textarea/Textarea'
import { IPost } from '../../../../types/types'

type PropTypes = {
  posts: Array<IPost>
  addPost: (formData: formNames) => void
}

const Posts: React.FC<PropTypes> = ({ posts, addPost }) => {
  const postsElements = posts.map(
    post => <Post key={post.id} text={post.text} likes={post.likes}/>
  ).reverse()

  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>Посты</h2>
      <AddNewPostFormRedux onSubmit={(formData) => { addPost(formData) }}/>
      <div className={styles.postsList}>
        {postsElements}
      </div>
    </div>
  )
}

type formNames = {
  newPost: string
}

const maxLengthValidator = maxLength(10)

const AddNewPostForm: React.FC<InjectedFormProps<formNames>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={styles.textarea}
          name='newPost'
          component={Textarea}
          placeholder='Что у вас нового?'
          validate={[required, maxLengthValidator]}
          rows={2}
          style={{ marginTop: '10px', width: '100%' }}
        />
      </div>
      <div>
        <Button style={{ marginTop: '10px' }}>Отправить</Button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<formNames>({ form: 'profileAddNewPost' })(AddNewPostForm)

export default Posts
