import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../../utils/validators/validators";
import {formControl} from "../../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);
const Textarea = formControl('textarea');

function Posts(props) {
    const postsElements = props.state.profilePage.posts.map(
        post => <Post key={post.id} text={post.text} likes={post.likes}/>
    ).reverse();

    return (
        <div className={styles.posts}>
            <h2 className={styles.title}>Посты</h2>
            <AddNewPostFormRedux onSubmit={(formData) => {props.addPost(formData)}}/>
            <div className={styles.postsList}>
                {postsElements}
            </div>
        </div>
    );
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPost'})(AddNewPostForm);

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.textarea} name='newPost' component={Textarea} placeholder='Что у вас нового?' validate={[required, maxLength]}/>
            </div>
            <div>
                <button className={styles.button}>Отправить</button>
            </div>
        </form>
    );
}

export default Posts;