import { PostType, ProfileType } from '../../types/types'
import reducer from './reducer'
import { addPost } from './actions'

const initialState = {
  posts: [
    { id: 1, text: 'Вам нравится React?', likes: 4 },
    { id: 2, text: 'hey', likes: 2 }
  ] as PostType[],
  profile: null as ProfileType | null,
  status: '',
  avatarIsFetching: false
}

describe('profile-reducer', () => {
  it('Длина постов была увеличена', () => {
    // 1) Arrange - подготовка
    const action = addPost({ newPost: 'new post' })

    // 2) Act - действие
    const newState = reducer(initialState, action)

    // 3) Assert - првоерка
    expect(newState.posts.length).toBe(3)
  })

  it('Текст нового поста верный', () => {
    // 1) Arrange
    const action = addPost({ newPost: 'new post' })

    // 2) Act
    const newState = reducer(initialState, action)

    // 3) Assert
    expect(newState.posts[2].text).toBe('new post')
  })
})
