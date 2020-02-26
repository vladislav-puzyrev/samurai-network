import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    {id: 1, text: 'Вам нравится React?', likes: 4},
    {id: 2, text: 'hey', likes: 2},
  ],
  profile: null,
  status: '',
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-POST':
      const nextId = state.posts[state.posts.length - 1].id + 1;
      const newPost = {
        id: nextId,
        text: action.post,
        likes: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: '',
      };

    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };

    default:
      return state;
  }
}

export const addPostActionCreator = (formData) => (
    {type: 'ADD-POST', post: formData.newPost}
);
export const setUserProfile = (profile) => (
    {type: 'SET-USER-PROFILE', profile: profile}
);
export const setStatus = (status) => (
    {type: SET_STATUS, status: status}
);
export const deletePost = (postId) => (
    {type: DELETE_POST, postId: postId}
);
export const savePhotoSuccess = (photos) => (
    {type: SAVE_PHOTO_SUCCESS, photos: photos}
);

export const getUsersProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
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

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUsersProfile(getState().auth.userId));
  } else {
    dispatch(stopSubmit(
        'edit-profile', {_error: 'response.data.messages[0]'},
    ));
    return Promise.reject();
  }
};

export default profileReducer;
