import * as actions from './actions'
import * as constants from './constants'
import { InferValueTypes } from '../store'
import { PostType, ProfileType } from '../../types/types'

const initialState = {
  posts: [
    { id: 1, text: 'Вам нравится React?', likes: 4 },
    { id: 2, text: 'hey', likes: 2 }
  ] as PostType[],
  profile: null as ProfileType | null,
  status: '',
  avatarIsFetching: false
}

export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

function reducer (state = initialState, action: ActionsType): typeof initialState {
  switch (action.type) {
    case constants.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts[state.posts.length - 1].id + 1,
            text: action.text,
            likes: 0
          }
        ]
      }

    case constants.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case constants.SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case constants.SET_PROFILE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType
      }

    case constants.SET_AVATAR_FETCHING:
      return {
        ...state,
        avatarIsFetching: action.isFetching
      }

    default:
      return state
  }
}

export default reducer
