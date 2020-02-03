import React from 'react';
import styles from './User.module.css';
import defaultAvatar from '../../../../assets/images/defaultAvatar.png';
import {NavLink} from 'react-router-dom';

function User(props) {
    return (
        <li className={styles.user}>
            <div className={styles.avatarBox}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small || defaultAvatar} alt='avatar' width='100'/>
                </NavLink>
                {
                    props.user.followed ?
                        <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}>unfollow</button> :

                        <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }}>follow</button>
                }
            </div>

            <div>
                {props.user.name}
                {props.user.status}
            </div>
        </li>
    );
}

export default User;