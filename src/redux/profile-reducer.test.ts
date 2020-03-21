// import profileReducer, { addPost } from './profile-reducer'
import { IPost, IProfile } from '../types/types'

const initialState = {
  posts: [
    { id: 1, text: 'Вам нравится React?', likes: 4 },
    { id: 2, text: 'hey', likes: 2 },
  ] as Array<IPost>,
  profile: null as IProfile | null,
  status: '',
  postText: '',
}

// it('Длина постов была увеличена', () => {
//   // 1) Arrange
//   const action = addPost({ newPost: 'hello' })
//
//   // 2) Act
//   const newState = profileReducer(initialState, action)
//
//   // 3) Assert
//   expect(newState.posts.length).toBe(3)
// })

// it('Текст нового поста верный', () => {
//   // 1) Arrange
//   const action = addPost({ newPost: 'hello' })
//
//   // 2) Act
//   const newState = profileReducer(initialState, action)
//
//   // 3) Assert
//   expect(newState.posts[2].text).toBe('hello')
// })

// TDD
// it('Длина постов после удаления декрентирована', () => {
//   // 1) Arrange
//   const action = deletePost(1)
//
//   // 2) Act
//   const newState = profileReducer(initialState, action)
//
//   // 3) Assert
//   expect(newState.posts.length).toBe(1)
// })

// it('Длина постов после удаления не должна уменьшится если id не корректный',
//   () => {
//     // 1) Arrange
//     const action = deletePost(1000)
//
//     // 2) Act
//     const newState = profileReducer(initialState, action)
//
//     // 3) Assert
//     expect(newState.posts.length).toBe(2)
//   })
