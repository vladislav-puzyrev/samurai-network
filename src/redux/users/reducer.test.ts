import usersReducer, { InitialStateType } from './reducer'
import { acceptFollow, acceptUnfollow } from './actions'

describe('Users reducer', () => {
  let initialState: InitialStateType

  beforeEach(() => {
    initialState = {
      users: [
        { id: 1, name: 'vlad', status: 'status1', followed: false, photos: { large: null, small: null } },
        { id: 2, name: 'olga', status: 'status2', followed: true, photos: { large: null, small: null } },
        { id: 3, name: 'ivan', status: 'status3', followed: false, photos: { large: null, small: null } }
      ],
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      followingInProgress: [],
      term: '',
      isFollowingUser: false
    }
  })

  test('Подписка на пользователя', () => {
    const newState = usersReducer(initialState, acceptFollow(3))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
  })

  test('Отписка от пользователя', () => {
    const newState = usersReducer(initialState, acceptUnfollow(2))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeFalsy()
  })
})
