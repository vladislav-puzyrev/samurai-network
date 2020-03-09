import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import messagesReducer from './messages-reducer'

const myStore = {
  _subscriber () {
    console.log('no subscribers')
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Вам нравится React?', likes: 4 },
        { id: 2, text: 'hey', likes: 2 }
      ],
      postText: 'facebook'
    },
    messagesPage: {
      dialogs: [
        { id: 1, username: 'Димыч' },
        { id: 2, username: 'Саша' },
        { id: 3, username: 'Валера' },
        { id: 4, username: 'Иван' },
        { id: 5, username: 'Света' }
      ],
      messages: [
        { id: 1, username: 'Димыч', message: 'Я люблю react!' },
        { id: 2, username: 'Димыч', message: 'Я люблю react!' }
      ],
      currentMessage: 'Привет мир!'
    },
    sidebar: {
      friends: [
        {
          id: 1,
          username: 'Димыч',
          avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
          id: 2,
          username: 'Колян',
          avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
          id: 3,
          username: 'Серега',
          avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        }
      ]
    }
  },

  getState () {
    return this._state
  },
  subscribe (observer) {
    this._subscriber = observer
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._subscriber()
  }
}

export default myStore
