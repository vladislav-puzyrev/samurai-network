import React from 'react'
import styles from './Friends.module.css'

function Friends () {
  return (
    <div className={styles.friends}>
      <div className={styles.friendsTitle}>
        Друзья
      </div>
      <ul className={styles.friendsList}>
        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>

        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>

        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>

        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>

        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>

        <li className={styles.friendsListItem}>
          <img
            className={styles.avatar}
            src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
            alt='avatar'
          />
          <div className={styles.name}>
            Димыч
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Friends
