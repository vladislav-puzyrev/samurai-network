import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../types/AppTypes'

const ADD_POST = 'samurai-network/profile/ADD_POST'
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'samurai-network/profile/SET_STATUS'
const DELETE_POST = 'samurai-network/profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
    { id: 1, text: 'Вам нравится React?', likes: 4 },
    { id: 2, text: 'hey', likes: 2 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  postText: '',
}

export type InitialStateType = typeof initialState;

function profileReducer (state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case ADD_POST:
      const nextId = state.posts[state.posts.length - 1].id + 1
      const newPost = {
        id: nextId,
        text: action.post,
        likes: 0,
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: '',
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }

    default:
      return state
  }
}

// addPostActionCreator
type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  post: string
};

export const addPostActionCreator = (formData: any): AddPostActionCreatorActionType => (
  { type: ADD_POST, post: formData.newPost }
)

// setUserProfile
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
};

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => (
  { type: SET_USER_PROFILE, profile: profile }
)

// setStatus
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
};

export const setStatus = (status: string): SetStatusActionType => (
  { type: SET_STATUS, status: status }
)

// deletePost
type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
};

export const deletePost = (postId: number): DeletePostActionType => (
  { type: DELETE_POST, postId: postId }
)

// savePhotoSuccess
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => (
  { type: SAVE_PHOTO_SUCCESS, photos: photos }
)

export const getUsersProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.updatePhoto(file)
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const response = await profileAPI.updateProfile(profile)
  if (response.resultCode === 0) {
    dispatch(getUsersProfile(getState().auth.userId))
  }
  else {
    dispatch(stopSubmit(
      'edit-profile', { _error: 'response.data.messages[0]' },
    ))
    return Promise.reject()
  }
}

export default profileReducer
