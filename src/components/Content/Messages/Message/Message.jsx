import React from 'react';
import styles from './Message.module.css';

function Message(props) {
  return (
      <li className={styles.chatItem}>
        <div className={styles.profile}>
          <img className={styles.avatar}
               src="https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg"
               alt="avatar"/>
          <div>{props.name}</div>
        </div>
        <div>
          {props.message}
        </div>
      </li>
  );
}

export default Message;