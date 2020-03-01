import {usersAPI} from '../api/api';
import {UserType} from '../types/types';

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users ids
};

export type InitialStateType = typeof initialState;

function usersReducer(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {...user, followed: true};
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {...user, followed: false};
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsers,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
            [...state.followingInProgress, action.userId] :
            state.followingInProgress.filter(id => id !== action.userId),
      };

    default:
      return state;
  }
}

// Action Creators
type AcceptFollowActionType = {
  type: typeof FOLLOW,
  id: number
};
export const acceptFollow = (id: number): AcceptFollowActionType => ({type: FOLLOW, id});

type AcceptUnfollowActionType = {
  type: typeof UNFOLLOW,
  id: number
};
export const acceptUnfollow = (id: number): AcceptUnfollowActionType => ({type: UNFOLLOW, id});

type SetUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
};
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersActionType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  totalUsers: number
};
export const setTotalUsers = (totalUsers: number): SetTotalUsersActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsers,
});

type SetIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
};
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean
  userId: number
};
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// Thunk Creators
export const getRequestUsers = (pageSize: number, currentPage: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));
  const response = await usersAPI.getUsers(pageSize, currentPage);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsers(response.totalCount));
  dispatch(setIsFetching(false));
};

export const follow = (userId: number) => (dispatch: any) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, acceptFollow);
};

export const unfollow = (userId: number) => (dispatch: any) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, acceptUnfollow);
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) dispatch(actionCreator(userId));
  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
