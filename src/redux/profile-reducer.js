import {profileAPI, usersAPI} from "../api/api";

const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    posts: [
        {id: 1, text: 'Вам нравится React?', likes: 4},
        {id: 2, text: 'hey', likes: 2}
    ],
    profile: null,
    status: ''
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD-POST':
            const nextId = state.posts[state.posts.length - 1].id + 1;
            const newPost = {
                id: nextId,
                text: action.post,
                likes: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            };

        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };

        default:
            return state;
    }
}

export const addPostActionCreator = (formData) => ({
    type: 'ADD-POST',
    post: formData.newPost
});

export const setUserProfile = (profile) => ({
    type: 'SET-USER-PROFILE',
    profile: profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId: postId
});

export const getUsersProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;
