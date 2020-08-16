import { extraArgument } from '../store'
import { acceptFollow, acceptUnfollow, toggleFollowedUser, toggleFollowingProgress } from './actions'
import { follow, unfollow } from './thunks'

jest.mock('../store')
const result = { resultCode: 0, messages: [], data: {} }
// @ts-ignore
extraArgument.usersAPI.follow.mockReturnValue(Promise.resolve(result))
// @ts-ignore
extraArgument.usersAPI.unfollow.mockReturnValue(Promise.resolve(result))

const dispatch = jest.fn()
const getState = jest.fn()

beforeEach(() => {
  dispatch.mockClear()
  getState.mockClear()
})

describe('Users thunks', () => {
  test('follow', async () => {
    const userId = 3
    const thunk = follow(userId)

    await thunk(dispatch, getState, extraArgument)

    expect(dispatch).toBeCalledTimes(4)
    expect(dispatch).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, userId))
    expect(dispatch).toHaveBeenNthCalledWith(2, acceptFollow(userId))
    expect(dispatch).toHaveBeenNthCalledWith(3, toggleFollowedUser(true))
    expect(dispatch).toHaveBeenNthCalledWith(4, toggleFollowingProgress(false, userId))
  })

  test('unfollow', async () => {
    const userId = 3
    const thunk = unfollow(userId)

    await thunk(dispatch, getState, extraArgument)

    expect(dispatch).toBeCalledTimes(4)
    expect(dispatch).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, userId))
    expect(dispatch).toHaveBeenNthCalledWith(2, acceptUnfollow(userId))
    expect(dispatch).toHaveBeenNthCalledWith(3, toggleFollowedUser(false))
    expect(dispatch).toHaveBeenNthCalledWith(4, toggleFollowingProgress(false, userId))
  })
})
