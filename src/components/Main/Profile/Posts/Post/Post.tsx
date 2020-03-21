import React from 'react'
import styles from './Post.module.css'

type PropTypes = {
  text: string
  likes: number
}

const Post: React.FC<PropTypes> = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <img className={styles.avatar} src='https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg' alt=''/>
      </div>
      <div className={styles.message}>
        <div>
          {props.text}
        </div>
        <div>
          {props.likes}♥
        </div>
      </div>
    </div>
  )
}

export default Post
