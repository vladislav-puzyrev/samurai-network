import React from 'react';
import styles from './Profile.module.css';
// import Wallpaper from './Wallpaper/Wallpaper';
import User from "./User/User";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    return (
        <div className={styles.profile}>
            {/*<Wallpaper/>*/}
            <User profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;